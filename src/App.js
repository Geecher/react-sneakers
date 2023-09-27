import Header from "./components/Header";
import Drawer from "./components/Drawer";
import Card from "./components/Card";
import React from "react";

function App() {
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [cartOpened, setCartOpened] = React.useState(false);

  React.useEffect(() => {
    fetch('https://63b9cd7c56043ab3c78fa479.mockapi.io/items')
      .then(res => {
        return res.json();
      })
      .then(json => {
        setItems(json);
      });
  }, [])

  const onAddToCart = (obj) => {
    setCartItems(prev => [...prev, obj]);
  };

  return (
    <div className="wrapper clear">
      {cartOpened && <Drawer items={cartItems} closeCart={() => setCartOpened(false)} />}
      <Header onClickCart={() => setCartOpened(true)}/>

      <div className="content p-40">
        <div className="d-flex align-center justify-between mb-30">
          <h1>Все кроссовки</h1>
          <div className="search-block">
            <img className="mr-10" src="/img/search.svg" alt="Поиск" />
            <input type="text" placeholder="Поиск..." />
          </div>
        </div>
        <div className="row">
          {items.map((item) => (
            <Card
              name={item.name}
              price={item.price}
              img={item.img}
              clickToCart={(obj) => {
                onAddToCart(obj);
              }}
              clickFavourite={() => {
                console.log("Элемент добавили в избранное");
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
