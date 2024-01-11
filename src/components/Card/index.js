import React from "react";
import styles from "./Card.module.scss";

function Card({id, img, name, price, clickFavourite, clickToCart, favorited = false}) {
  const [isAdded, setIsAdded] = React.useState(false);
  const [isFavorite, setIsFavorite] = React.useState(favorited);

  const onClickPlus = () => {
    console.log(id);
    clickToCart({ id, img, name, price });
    setIsAdded(!isAdded);
  };

  const onClickFavorite = () => {
    clickFavourite({ id, img, name, price });
    setIsFavorite(!isFavorite);
  };

  return (
    <div className={styles.card}>
      <div className={styles.favourite} onClick={onClickFavorite}>
        <img src={isFavorite ? "/img/heart-liked.svg" : "/img/heart-unliked.svg"} alt="" />
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
