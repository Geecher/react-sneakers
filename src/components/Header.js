function Header() {
    return (
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
    );
};

export default Header;