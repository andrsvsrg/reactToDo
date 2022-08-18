import "./myButton.css";

import React from "react";

const MyButton = (props) => {
  return (
    <button { ...props } className={ "myButton-default-style " + props.className }>
      { props.children }
    </button>
  );
};

export default MyButton;