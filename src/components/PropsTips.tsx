import React from "react";
import { NameProps } from "./types";

const PropsTips = ({ firstName, lastName }: NameProps) => {
  return (
    <div>
      <h1>
        {firstName} {lastName}
      </h1>
    </div>
  );
};

export default PropsTips;
