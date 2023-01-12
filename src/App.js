
function App() {
  return (
    <div className="wrapper clear">
        <div className="overlay">
            <div className="drawer">
                <h2 className="mb-30">Корзина</h2>
            </div>
        </div>

        <header className="d-flex align-center justify-between p-40">
            <div className="headerLeft d-flex align-center">
                <img width={40} height={40} src="/img/logo.png" alt=""/>
                <div className="headerInfo">
                    <h3 className="text-uppercase">REACT SNEAKERS</h3>
                    <span className="opacity-5">Магазин лучших кроссовок</span>
                </div>
            </div>
            <ul className="headerRight d-flex align-center">
                <li>
                    <img width={18} height={18} src="/img/cart.svg" alt=""/>
                    <span>1205 руб.</span>    
                </li>   
                <li>
                    <img width={21} height={20} src="/img/favorite.svg" alt=""/>                    
                </li>   
                <li>
                    <img width={21} height={20} src="/img/account.svg" alt=""/>
                </li>   
            </ul>
        </header>
        <div className="content p-40">
            <div className="d-flex align-center justify-between mb-30">
                <h1>Все кроссовки</h1>
                <div className="search-block">
                    <img className="mr-10" src="/img/search.svg" alt="Поиск"/>
                    <input type="text" placeholder="Поиск..."/>
                </div>
            </div>
            <div className="row">
                <div className="card">
                    <div className="favourite">
                        <img src="/img/heart-unliked.svg" alt="Unliked"/>
                    </div>
                    <img width={133} height={112} src="/img/sneakers/001.jpg" alt="nike blazer"/>
                    <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
                    <div className="d-flex align-center justify-between">
                        <div>
                            <p className="card__price">Цена:</p>
                            <b className="card__num">12 999 руб.</b>
                        </div>
                        <button className="button">
                            <img width={11} height={11} src="/img/plus.svg" alt="Plus"/>
                        </button>
                    </div>
                </div>
                <div className="card">
                    <img width={133} height={112} src="/img/sneakers/002.jpg" alt="nike blazer"/>
                    <h5>Мужские Кроссовки Nike Air Max 270</h5>
                    <div className="d-flex align-center justify-between">
                        <div>
                            <p className="card__price">Цена:</p>
                            <b className="card__num">12 999 руб.</b>
                        </div>
                        <button className="button">
                            <img width={11} height={11} src="/img/plus.svg" alt="Plus"/>
                        </button>
                    </div>
                </div>
                <div className="card">
                    <img width={133} height={112} src="/img/sneakers/003.jpg" alt="nike blazer"/>
                    <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
                    <div className="d-flex align-center justify-between">
                        <div>
                            <p className="card__price">Цена:</p>
                            <b className="card__num">8 499 руб.</b>
                        </div>
                        <button className="button">
                            <img width={11} height={11} src="/img/plus.svg" alt="Plus"/>
                        </button>
                    </div>
                </div>
                <div className="card">
                    <img width={133} height={112} src="/img/sneakers/004.jpg" alt="nike blazer"/>
                    <h5>Кроссовки Puma X Aka Boku Future Rider</h5>
                    <div className="d-flex align-center justify-between">
                        <div>
                            <p className="card__price">Цена:</p>
                            <b className="card__num">8 999 руб.</b>
                        </div>
                        <button className="button">
                            <img width={11} height={11} src="/img/plus.svg" alt="Plus"/>
                        </button>
                    </div>
                </div>
            </div>
        </div>

    </div>
  );
}

export default App;
