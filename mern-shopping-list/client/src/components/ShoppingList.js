import React, { useState } from "react";
import { Container, ListGroup, ListGroupItem, Button } from "reactstrap";
import {
  CSSTransition,
  Transition,
  TransitionGroup,
} from "react-transition-group";
import { v4 as uuidv4 } from "uuid";

const ShoppingList = () => {
  const [products, setProducts] = useState([
    { id: uuidv4(), name: "Eggs" },
    { id: uuidv4(), name: "Gasoline" },
    { id: uuidv4(), name: "Tomatoe" },
    { id: uuidv4(), name: "Milk" },
  ]);
  console.log(products);
  return (
    <Container>
      <Button
        color="dark"
        style={{ marginBottom: "2rem" }}
        onClick={() => {
          const name = prompt("Enter item name: ");
          if (name) {
            setProducts((prevState) => [...prevState, { id: uuidv4(), name }]);
          }
        }}
      >
        Add Item
      </Button>
      <ListGroup>
        <TransitionGroup className="shopping-list">
          {products.map((product) => (
            <CSSTransition key={product.id} timeout={500} classNames="fade">
              <ListGroupItem>
                <Button
                  className="remove-btn"
                  color="danger"
                  size="sm"
                  onClick={() => {
                    setProducts((prevState) => [
                      ...prevState.filter((item) => item.id !== product.id),
                    ]);
                  }}
                >
                  &times;
                </Button>
                {product.name}
              </ListGroupItem>
            </CSSTransition>
          ))}
        </TransitionGroup>
      </ListGroup>
    </Container>
  );
};

export default ShoppingList;
