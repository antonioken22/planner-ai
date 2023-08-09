import React from "react";

import CreateEventButton from "./create-event-button";
import SmallCalendar from "./small-calendar";
import EventLabels from "./event-labels";

export default function Topbar() {
  return (
    <aside className="w-full flex flex-row justify-normal">
      <div className="p-2 border">
        <CreateEventButton />
        <SmallCalendar />
      </div>
      <div className="ml-2 p-2">
        <EventLabels />
      </div>
    </aside>
  );
}
