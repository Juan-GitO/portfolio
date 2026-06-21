import React from "react";

// import styles
import styles from "./Button.module.css";

// import dependencies
import { clsx } from "clsx";
import Link from "next/link";

export const Button = ({
  href = undefined,
  color = "black",
  disabled = false,
  handleClick = undefined,
  children = undefined,
  customClasses = undefined,
  ...props
}) => {
  const classes = clsx(
    styles.button,
    {
      // colors
      [styles.buttonBlack]: color === "black",
      [styles.buttonWhite]: color === "white",
      // disabled
      [styles.buttonDisabled]: disabled,
    },
    // custom classes
    customClasses,
  );

  if (href) {
    return (
      <Link href={disabled ? "" : href} onClick={handleClick} className={classes} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <button disabled={disabled} onClick={handleClick} className={classes} {...props}>
      {children}
    </button>
  );
};

// default values handled in function parameter
