import React from "react";

import Button, { ButtonType } from "./Button";

export default {
  title: "Button",
  component: Button,
  parameters: {
    componentSubtitle: "Button",
  },
};

export const defaultButton = () => {
  return <Button>default 버튼</Button>;
};

export const primaryButton = () => {
  return <Button theme={ButtonType.PRIMARY}>primary 버튼</Button>;
};
export const secondaryButton = () => {
  return <Button theme={ButtonType.SECONDARY}>secondary 버튼</Button>;
};