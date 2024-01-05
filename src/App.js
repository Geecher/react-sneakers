import Header from "./components/Header";
import Drawer from "./components/Drawer";
import Home from './pages/Home'
import Favorites from './pages/Favorites'
import React from "react";
import axios from "axios";
import {
  Routes,
  Route,
} from "react-router-dom";



function App() {
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [favorites, setFavorites] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState('');
  const [cartOpened, setCartOpened] = React.useState(false);

  React.useEffect(() => {
    axios.get("https://dab7a731c6a49aa0.mokky.dev/items").then(res => {
      setItems(res.data);
    });
    axios.get("https://dab7a731c6a49aa0.mokky.dev/cart").then(res => {
      setCartItems(res.data);
    });
    axios.get("https://dab7a731c6a49aa0.mokky.dev/favourite").then(res => {
      setFavorites(res.data);
    });
  }, []);

  const onAddToFavourite = async (obj) => {
    try {
      // favorites.find((favObj) => {
      //   console.log(favObj);
      //   console.log(obj);
      //   console.log(favObj.id === obj.id);
      // });
      if (favorites.find(favObj => favObj.id === obj.id)) {
        axios.delete(`https://dab7a731c6a49aa0.mokky.dev/favourite/${obj.id}`);
        setFavorites((prev) => prev.filter((item) => item.id !== obj.id));
      } else {
        const {data} = await axios.post("https://dab7a731c6a49aa0.mokky.dev/favourite", obj);
        setFavorites((prev) => [...prev, data]);
      }
    } catch (error) {
      alert('Не удалось добавить в избранное')
    }
  };

  const onAddToCart = (obj) => {
    axios.post("https://dab7a731c6a49aa0.mokky.dev/cart", obj);
    setCartItems((prev) => [...prev, obj]);
  };

  const onRemoveItem = (id) => {
    axios.delete(`https://dab7a731c6a49aa0.mokky.dev/cart/${id}`);
    setCartItems((prev) => prev.filter(item => item.id !== id));
  }

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
  }

  return (
    <div className="wrapper clear">
      {cartOpened && (
        <Drawer items={cartItems} closeCart={() => setCartOpened(false)} onRemove={onRemoveItem} />
      )}
      <Header onClickCart={() => setCartOpened(true)} />

      <Routes>
        <Route index element={
          <Home items={items}
            searchValue={searchValue}
            setSearchValue={setSearchValue}
            onChangeSearchInput={onChangeSearchInput}
            onAddToFavourite={onAddToFavourite}
            onAddToCart={onAddToCart} />
        } />
        <Route path="/favorites" element={<Favorites items={favorites} onAddToFavourite={onAddToFavourite}/>} />
      </Routes>
    </div>
  );
}

export default App;
