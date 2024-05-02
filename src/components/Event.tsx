import React from "react";

type EventProps = {
  click: (e: React.MouseEvent<HTMLButtonElement>, text: string) => void;
  change: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Event = (props: EventProps) => {
  return (
    <div>
      <button onClick={(e) => props.click(e, "おはよう")}>クリック</button>
      <input type="text" onChange={props.change} />
    </div>
  );
};

export default Event;
