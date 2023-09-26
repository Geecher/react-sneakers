import styles from './Card.module.scss';

function Card(props) {
  return (
    <div className={styles.card}>
      <div className={styles.favourite}>
        <img src="/img/heart-unliked.svg" alt="Unliked" />
      </div>
      <img width={133} height={112} src={props.img} alt="nike blazer" />
      <h5>{props.name}</h5>
      <div className="d-flex align-center justify-between">
        <div>
          <p className={styles.card__price}>Цена:</p>
          <b className={styles.card__num}>{props.price} руб.</b>
        </div>
        <button onClick={props.addToCart}>
          <img width={11} height={11} src="/img/plus.svg" alt="Plus" />
        </button>
      </div>
    </div>
  );
}

export default Card;
