import React from "react";

type TitleStyleProps = {
  style: React.CSSProperties;
};

const StyleProps = (props: TitleStyleProps) => {
  return (
    <div>
      <h1 style={props.style}>yoshiki yamazaki</h1>
    </div>
  );
};

export default StyleProps;
