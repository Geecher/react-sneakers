import Header from "./components/Header";
import Drawer from "./components/Drawer";
import Card from "./components/Card";
import React from "react";
import axios from "axios";

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
  }, []);

  const onAddToFavourite = (obj) => {
    axios.post("https://dab7a731c6a49aa0.mokky.dev/favourite", obj);
    setFavorites((prev) => [...prev, obj]);
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

      <div className="content p-40">
        <div className="d-flex align-center justify-between mb-30">
          <h1>{searchValue ? `Поиск по запросу: "${searchValue}"` : `Все кроссовки`}</h1>
          <div className="search-block">
            {searchValue && <img className="clear cu-p" onClick={() => setSearchValue('')} src="/img/btn-remove.svg" alt="Clear" />}
            <img className="mr-10" src="/img/search.svg" alt="Поиск" />
            <input onChange={onChangeSearchInput} value={searchValue} type="text" placeholder="Поиск..." />
          </div>
        </div>
        <div className="row">
          {items.filter((item) => item.name.toLowerCase().includes(searchValue.toLowerCase())).map((item, key) => (
            <Card
              key={key}
              name={item.name}
              price={item.price}
              img={item.img}
              clickToCart={(obj) => {
                onAddToCart(obj);
              }}
              clickFavourite={(obj) => {
                onAddToFavourite(obj);
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
