import React from "react";

import CalendarDays from "./calendar-days";

interface MonthProps {
  month: Array<Array<any>>;
}

const CalendarMonths: React.FC<MonthProps> = ({ month }) => {
  return (
    <div
      className="flex-1 grid grid-cols-7"
      style={{ gridTemplateRows: "repeat(6, minmax(72px, auto))" }}
    >
      {month.map((row, i) => (
        <React.Fragment key={i}>
          {row.map((day, idx) => (
            <CalendarDays day={day} key={idx} rowIdx={i} />
          ))}
        </React.Fragment>
      ))}
    </div>
  );
};

export default CalendarMonths;
