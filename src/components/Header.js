import { Link } from 'react-router-dom';

function Header(props) {
    return (
        <header className="d-flex align-center justify-between p-40">
            <Link to="/">
                <div className="headerLeft d-flex align-center">
                    <img width={40} height={40} src="/img/logo.png" alt="" />
                    <div className="headerInfo">
                        <h3 className="text-uppercase">REACT SNEAKERS</h3>
                        <span className="opacity-5">Магазин лучших кроссовок</span>
                    </div>
                </div>
            </Link>
            <ul className="headerRight d-flex align-center">
                <li className="cu-p" onClick={props.onClickCart}>
                    <img width={18} height={18} src="/img/cart.svg" alt="Cart" />
                    <span>1205 руб.</span>
                </li>
                <li>
                    <Link to="/favorites">
                        <img width={21} height={20} src="/img/favorite.svg" alt="Favorite" />
                    </Link>
                </li>
                <li>
                    <img width={21} height={20} src="/img/account.svg" alt="Account" />
                </li>
            </ul>
        </header>
    );
};

export default Header;