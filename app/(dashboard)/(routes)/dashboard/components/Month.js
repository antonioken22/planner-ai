import React from "react";

import Day from "./Day";

export default function Month({ month }) {
  return (
    <div
      className="flex-1 grid grid-cols-7"
      style={{ gridTemplateRows: "repeat(6, minmax(72px, auto))" }}
    >
      {month.map((row, i) => (
        <React.Fragment key={i}>
          {row.map((day, idx) => (
            <Day day={day} key={idx} rowIdx={i} />
          ))}
        </React.Fragment>
      ))}
    </div>
  );
}
