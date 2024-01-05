import Card from "../components/Card";

function Home({ 
    items,
    searchValue,
    setSearchValue,
    onChangeSearchInput,
    onAddToFavourite,
    onAddToCart }) {
    return (
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
                        {...item}
                        key={key}
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
    );
}

export default Home;