import React from "react";

type StatusProps = {
  status?: "loading" | "success" | "error";
};

const Status = (props: StatusProps) => {
  return (
    <div>
      Status
      <h1>{props.status}</h1>
    </div>
  );
};

export default Status;
