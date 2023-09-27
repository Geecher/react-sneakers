import React from "react";
import styles from "./Card.module.scss";

function Card({img, name, price, clickFavourite, clickToCart}) {
  const [isAdded, setIsAdded] = React.useState(false);

  const onClickPlus = () => {
    clickToCart({ img, name, price });
    setIsAdded(!isAdded);
  };

  return (
    <div className={styles.card}>
      <div className={styles.favourite} onClick={clickFavourite}>
        <img src="/img/heart-unliked.svg" alt="Unliked" />
      </div>
      <img width={133} height={112} src={img} alt="nike blazer" />
      <h5>{name}</h5>
      <div className="d-flex align-center justify-between">
        <div>
          <p className={styles.card__price}>Цена:</p>
          <b className={styles.card__num}>{price} руб.</b>
        </div>
        <img
          className={styles.plus}
          onClick={onClickPlus}
          src={isAdded ? "/img/btn-checked.svg" : "/img/btn-plus.svg"}
          alt="Plus"
        />
      </div>
    </div>
  );
}

export default Card;
