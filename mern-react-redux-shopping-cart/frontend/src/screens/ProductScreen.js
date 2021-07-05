import React from "react";
import styled from "styled-components";

const ProductScreen = () => {
  return (
    <ProductContainer>
      <div className="left">
        <div className="image">
          <img
            src="https://images.unsplash.com/photo-1518444065439-e933c06ce9cd?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80"
            alt="product"
          />
        </div>
        <div className="info">
          <p>Amazon Alexa</p>
          <p>Price: $499.99</p>
          <p>
            Description: It is capable of voice interaction, music playback,
            making to-do lists, setting alarms, streaming podcasts, playing
            audiobooks, and providing weather, traffic, sports, and other
            real-time information, such as news. Alexa can also control several
            smart devices using itself as a home automation system.
          </p>
        </div>
      </div>
      <div className="right">
        <div className="info">
          <p>
            Price:
            <span>$499.99</span>
          </p>
          <p>
            Status:
            <span>In Stock</span>
          </p>
          <p>
            Qty
            <select>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
          </p>
          <p>
            <button type="button">Add To Cart</button>
          </p>
        </div>
      </div>
    </ProductContainer>
  );
};

export default ProductScreen;

const ProductContainer = styled.div`
  max-width: 1300px;
  margin: 1rem auto;
  display: flex;

  .right {
    flex: 0.2;
    .info {
      width: 250px;
      margin: 1rem;
      background: #fff;
      box-shadow: 0 1px 4px rgba(0, 0, 0, 0.4);
      p {
        padding: 1rem;
        font-size: 0.8rem;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        border-bottom: 1px solid rgba(0, 0, 0, 0.2);
        &:nth-of-type(4) {
          border: none;
        }
        button {
          grid-column: 1/-1;
          width: 100%;
          padding: 10px 16px;
          background: #171717;
          color: #f4f4f4;
          border: 1px solid #171717;
          cursor: pointer;
          border-radius: 5px;
        }
        select {
          padding: 10px 16px;
        }
      }
    }
  }

  .left {
    display: flex;
    flex: 0.8;
    .image {
      margin: 1rem;
      flex: 0.6;
    }
    .info {
      margin: 1rem;
      flex: 0.4;
      background: #fff;
      height: fit-content;
      font-size: 0.9rem;

      p {
        padding: 1rem;
        border-bottom: 1px solid rgba(0, 0, 0, 0.2);
        &:nth-of-type(3) {
          border: none;
        }
        &:nth-of-type(1) {
          font-weight: bold;
          font-size: 1.3rem;
        }
      }
    }
  }
  @media (max-width: 960px) {
    flex-direction: column;

    .left {
      flex-direction: column;
      flex: 1;
      .image {
        flex: 1;
      }
      .info {
        flex: 1;
      }
    }

    .right {
      flex: 1;
      padding: 1rem;
      .info {
        width: 100%;
        margin: 0;
      }
    }
  }
`;
