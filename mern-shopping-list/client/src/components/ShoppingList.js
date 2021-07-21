import React from "react";
import { ListGroup, ListGroupItem, Button } from "reactstrap";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { useDispatch, useSelector } from "react-redux";
import { deleteItem } from "../redux/actions/itemActions";

const ShoppingList = () => {
  const allProducts = useSelector((state) => state.item);
  const { products } = allProducts;
  const dispatch = useDispatch();

  return (
    <ListGroup>
      <TransitionGroup className="shopping-list">
        {products.map((product) => (
          <CSSTransition key={product.id} timeout={500} classNames="fade">
            <ListGroupItem>
              <Button
                className="remove-btn"
                color="danger"
                size="sm"
                onClick={() => dispatch(deleteItem(product.id))}
              >
                &times;
              </Button>
              {product.name}
            </ListGroupItem>
          </CSSTransition>
        ))}
      </TransitionGroup>
    </ListGroup>
  );
};

export default ShoppingList;
