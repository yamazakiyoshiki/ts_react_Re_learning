import React from "react";
import { FollowerProps } from "./types";

const FollowerTips = ({ followerName }: FollowerProps) => {
  return (
    <div>
      <h3>
        {followerName.firstName} {followerName.lastName}
      </h3>
    </div>
  );
};

export default FollowerTips;
