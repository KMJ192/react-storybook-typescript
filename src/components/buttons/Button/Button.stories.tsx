import React from "react";

import Button, { ButtonType } from "./Button";

export default {
  title: "Button",
  component: Button,
  parameters: {
    componentSubtitle: "Button",
  },
};

export const primaryButton = () => {
  return <Button theme={ButtonType.PRIMARY}>primary btn</Button>;
};
export const secondaryButton = () => {
  return <Button theme={ButtonType.SECONDARY}>secondary btn</Button>;
};