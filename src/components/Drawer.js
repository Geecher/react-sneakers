function Drawer({closeCart, items = []}) {
  


  return (
    <div className="overlay">
      <div className="drawer">
        <h2 className="mb-30">
          Корзина
          <button className="removeBtn" onClick={closeCart}>
            <img width={11} height={11} src="/img/btn-remove.svg" alt="Plus" />
          </button>
        </h2>

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
                <button className="removeBtn">
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
      </div>
    </div>
  );
}

export default Drawer;
