import React from "react";
import classNames from "classnames";

function Buttons({ children, primary, rounded, alternate, ...res }) {
  const classes = classNames(
    res.className,
    " border cursor-pointer",
    {
      "border-[1px] bg-[#19B7CC] text-center w-[221px] h-[60px] text-black px-[50px] py-[16px] border-none  hover:bg-[#6ad3e0] tracking-[2px]":
        primary,
      "rounded-[20px]": rounded,
    },

    {
      "border-[1px] bg-[#fff] text-center w-[221px] h-[60px] text-[#19B7CC] px-[50px] py-[16px] border-[#19B7CC]  hover:bg-[#dadada] tracking-[2px]":
        alternate,
      "rounded-[20px]": rounded,
    },
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
