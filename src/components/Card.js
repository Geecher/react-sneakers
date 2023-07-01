function Card(props) {
  return (
    <div className="card">
      <div className="favourite">
        <img src="/img/heart-unliked.svg" alt="Unliked" />
      </div>
      <img
        width={133}
        height={112}
        src={props.img}
        alt="nike blazer"
      />
      <h5>{props.name}</h5>
      <div className="d-flex align-center justify-between">
        <div>
          <p className="card__price">Цена:</p>
          <b className="card__num">{props.price} руб.</b>
        </div>
        <button className="button">
          <img width={11} height={11} src="/img/plus.svg" alt="Plus" />
        </button>
      </div>
    </div>
  );
}

export default Card;