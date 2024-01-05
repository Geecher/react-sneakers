import Card from '../components/Card'
import { Link } from 'react-router-dom';

function Favorites({ items, onAddToFavourite }) {
    return (
        <div className="content p-40">
            <Link to="/">
                <h1 className='mb-30'>Мои закладки</h1>
            </Link>
            <div className="row">
                {items.map((item, key) => (
                    <Card
                        {...item}
                        key={key}
                        favorited = {true}
                        clickFavourite={(obj) => {
                            onAddToFavourite(obj);
                        }}
                        // clickToCart={(obj) => {
                        //     onAddToCart(obj);
                        // }}
                    />
                ))}
            </div>
        </div>
    );
};

export default Favorites;