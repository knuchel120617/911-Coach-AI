import React from "react";
import classNames from "classnames";

function Buttons({ children, primary, rounded, alternate, ...res }) {
  const classes = classNames(
    res.className,
    "border cursor-pointer"
  );

  return (
    <>
      <button {...res} className={classes}>
        {children}
      </button>
    </>
  );
}

Buttons.propTypes = {
  checkValues: ({ primary, alternate }) => {
    const count = Number(!!primary) + Number(!!alternate);
    if (count > 1) {
      return new Error(
        "Can not have primary, secondary , tenary buttons, choose one",
      );
    }
  },
};

export default Buttons;
