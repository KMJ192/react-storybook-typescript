import React from "react";
import classNames from "classnames";

import styles from "./Button.module.scss";

export enum ButtonType {
  DEFAULT = "default",
  PRIMARY = "primary",
  SECONDARY = "secondary",
}

export interface Props {
  children: React.ReactNode;
  onClick?: React.MouseEventHandler;
  theme?: ButtonType;
}

function Button({ children, theme = ButtonType.DEFAULT }: Props) {
  const classNameProps = classNames(styles.default, styles[theme]);
  return (
    <button className={classNameProps}>{children}</button>
  );
}

export default Button;