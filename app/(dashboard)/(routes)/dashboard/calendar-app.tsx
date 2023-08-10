import React, { useState, useContext, useEffect } from "react";

import CalendarHeader from "./components/calendar-header";
import Topbar from "./components/top-bar";
import CalendarMonths from "./components/calendar-months";
import EventModal from "./components/event-modal";

import GlobalContext from "./context/global-context";
import { getMonth } from "./util";

function CalendarApp() {
  const [currenMonth, setCurrentMonth] = useState(getMonth());
  const { monthIndex, showEventModal } = useContext(GlobalContext);

  useEffect(() => {
    setCurrentMonth(getMonth(monthIndex));
  }, [monthIndex]);

  return (
    <div>
      {showEventModal && <EventModal />}

      <div className="flex flex-col">
        <div className="row-span-1">
          <CalendarHeader />
        </div>
        <div>
          <div className="p-2 row-span-1">
            <Topbar />
          </div>
          <div className="ml-2 mr-2 row-span-1">
            <CalendarMonths month={currenMonth} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CalendarApp;
