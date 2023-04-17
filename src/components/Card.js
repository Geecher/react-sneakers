function Card() {
  return (
    <div className="card">
      <div className="favourite">
        <img src="/img/heart-unliked.svg" alt="Unliked" />
      </div>
      <img
        width={133}
        height={112}
        src="/img/sneakers/001.jpg"
        alt="nike blazer"
      />
      <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
      <div className="d-flex align-center justify-between">
        <div>
          <p className="card__price">Цена:</p>
          <b className="card__num">12 999 руб.</b>
        </div>
        <button className="button">
          <img width={11} height={11} src="/img/plus.svg" alt="Plus" />
        </button>
      </div>
    </div>
  );
}

export default Card;