import React from "react";
import Section from "./Section";

const Home = () => {
  return (
    <div>
      <Section
        title="Model S"
        descriptions="Order Online for Touchless Deliver"
        backgroundImg="model-s.jpg"
        leftBtnText="Custom Order"
        rightBtnText="Existing Inventory"
      />
      <Section
        title="Model Y"
        descriptions="Order Online for Touchless Deliver"
        backgroundImg="model-y.jpg"
        leftBtnText="Custom Order"
        rightBtnText="Existing Inventory"
      />
      <Section
        title="Model 3"
        descriptions="Order Online for Touchless Deliver"
        backgroundImg="model-3.jpg"
        leftBtnText="Custom Order"
        rightBtnText="Existing Inventory"
      />
      <Section
        title="Model X"
        descriptions="Order Online for Touchless Deliver"
        backgroundImg="model-x.jpg"
        leftBtnText="Custom Order"
        rightBtnText="Existing Inventory"
      />
    </div>
  );
};

export default Home;
