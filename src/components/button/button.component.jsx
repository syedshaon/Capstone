// Default

// Inverted

// Google sign in

import "./button-Styles.scss";

const buttonTypesClass = {
  google: "google-sign-in",
  inverted: "inverted",
};

function Button({ children, buttonType, ...otherProps }) {
  return (
    <button className={`button-container ${buttonTypesClass[buttonType]}`} {...otherProps}>
      {children}
    </button>
  );
}

export default Button;
