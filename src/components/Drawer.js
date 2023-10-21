function Drawer({closeCart, onRemove, items = []}) {
  return (
    <div className="overlay">
      <div className="drawer">
        <h2 className="mb-30">
          Корзина
          <button className="removeBtn" onClick={closeCart}>
            <img width={11} height={11} src="/img/btn-remove.svg" alt="Plus" />
          </button>
        </h2>

        { items.length > 0 ? (
            <>
              <div className="items mb-40">
                { 
                  items.map((item) => (
                    <div className="cartItem mb-20">
                      <div
                        style={{ backgroundImage: `url(${item.img})` }}
                        className="cartItemImg"
                      ></div>
                      <div className="mr-20">
                        <p className="mb-5">{item.name}</p>
                        <b>{item.price} руб.</b>
                      </div>
                      <button className="removeBtn" onClick={() => onRemove(item.id)}>
                        <img
                          width={11}
                          height={11}
                          src="/img/btn-remove.svg"
                          alt="Plus"
                        />
                      </button>
                    </div>
                  ))
                }
              </div>
              <div className="cartTotalBlock">
                <ul>
                  <li>
                    <span>Итого:</span>
                    <div></div>
                    <b>21 498 руб.</b>
                  </li>
                  <li>
                    <span>Налог 5%: </span>
                    <div></div>
                    <b>1074 руб.</b>
                  </li>
                </ul>
                <button>Оформить заказ</button>
              </div>
            </>
          ) : (
            <div className="cartEmpty">
              <h3>Корзина пуста</h3>
              <p>Добавьте хотя бы одну пару кроссовок</p> 
              <button onClick={closeCart}>Вернуться назад</button>
            </div>
          )
        }
      </div>
    </div>
  );
}

export default Drawer;
