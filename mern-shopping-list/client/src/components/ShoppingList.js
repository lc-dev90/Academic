import React, { useEffect } from "react";
import { ListGroup, ListGroupItem, Button } from "reactstrap";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { useDispatch, useSelector } from "react-redux";
import { deleteItem, getItems } from "../redux/actions/itemActions";

const ShoppingList = () => {
  const allProducts = useSelector((state) => state.item);
  const { items } = allProducts;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getItems());
  }, []);

  return (
    <ListGroup>
      <TransitionGroup className="shopping-list">
        {items.map((item) => (
          <CSSTransition key={item._id} timeout={500} classNames="fade">
            <ListGroupItem>
              <Button
                className="remove-btn"
                color="danger"
                size="sm"
                onClick={() => dispatch(deleteItem(item._id))}
              >
                &times;
              </Button>
              {item.name}
            </ListGroupItem>
          </CSSTransition>
        ))}
      </TransitionGroup>
    </ListGroup>
  );
};

export default ShoppingList;
