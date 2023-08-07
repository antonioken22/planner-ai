import React, { useState, useContext, useEffect } from "react";

import CalendarHeader from "./components/CalendarHeader";
import Topbar from "./components/Topbar";
import Month from "./components/Month";
import EventModal from "./components/EventModal";

import GlobalContext from "./context/GlobalContext";
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

      <div className="h-screen flex flex-col">
        <div className="row-span-1">
          <CalendarHeader />
        </div>
        <div>
          <div className="p-2 row-span-1">
            <Topbar />
          </div>
          <div className="ml-2 mr-2 row-span-1">
            <Month month={currenMonth} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CalendarApp;
