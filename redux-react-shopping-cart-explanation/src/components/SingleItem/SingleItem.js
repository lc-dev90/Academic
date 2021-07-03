import React from "react";
import styles from "./SingleItem.module.css";

const SingleItem = () => {
  return (
    <div className={styles.singleItem}>
      <img className={styles.singleItem__image} src="" />
      <div className={styles.singleItem__details}>
        <p className={styles.details__title}>title</p>
        <p className={styles.details__description}>description</p>
        <p className={styles.details__price}>$ price</p>

        <button className={styles.details__addBtn}>Add To Cart</button>
      </div>
    </div>
  );
};

export default SingleItem;
