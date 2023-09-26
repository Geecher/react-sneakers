
import Header from './components/Header';
import Drawer from './components/Drawer';
import Card from './components/Card';

const arr = [
    { name: 'Мужские Кроссовки Nike Blazer Mid Suede', price: 12999, img: '/img/sneakers/001.jpg' },
    { name: 'Мужские Кроссовки Nike Air Max 270', price: 8499, img: '/img/sneakers/002.jpg' },
    { name: 'Мужские Кроссовки Nike Blazer Mid Suede', price: 8999, img: '/img/sneakers/003.jpg' },
    { name: 'Кроссовки Puma X Aka Boku Future Rider', price: 15000, img: '/img/sneakers/004.jpg' },
]


function App() {
  return (
    <div className="wrapper clear">
        <Drawer/>
        <Header/>
        
        <div className="content p-40">
            <div className="d-flex align-center justify-between mb-30">
                <h1>Все кроссовки</h1>
                <div className="search-block">
                    <img className="mr-10" src="/img/search.svg" alt="Поиск"/>
                    <input type="text" placeholder="Поиск..."/>
                </div>
            </div>
            <div className="row">
                {arr.map(el => (
                    <Card name={el.name} price={el.price} img={el.img} addToCart={() => {console.log(el);}}/>
                ))}
            </div>
        </div>

    </div>
  );
}

export default App;
