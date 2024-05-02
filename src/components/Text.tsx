import React from "react";

type TextProps = {
  children: string;
};

const Text = (props: TextProps) => {
  return <div>{props.children}</div>;
};

export default Text;
