import React, { useState } from "react";
import styles from "./CartItem.module.css";

const CartItem = () => {
  return (
    <div className={styles.cartItem}>
      <img className={styles.cartItem__image} src="" alt="" />
      <div className={styles.cartItem__details}>
        <p className={styles.details__title}></p>
        <p className={styles.details__desc}></p>
        <p className={styles.details__price}>$ </p>
      </div>
      <div className={styles.cartItem__actions}>
        <div className={styles.cartItem__qty}>
          <label htmlFor="qty">Qty</label>
          <input min="1" type="number" id="qty" name="qty" />
        </div>
        <button className={styles.actions__deleteItemBtn}>
          <img
            src="https://image.flaticon.com/icons/svg/709/709519.svg"
            alt=""
          />
        </button>
      </div>
    </div>
  );
};

export default CartItem;
