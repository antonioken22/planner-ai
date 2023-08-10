import React, { useState, useEffect } from "react";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import CreateEventButton from "./create-event-button";
import SmallCalendar from "./small-calendar";
import EventLabels from "./event-labels";

export default function Topbar() {
  const [openTooltip, setOpenTooltip] = useState(false);

  useEffect(() => {
    setOpenTooltip(true);
    const timer = setTimeout(() => setOpenTooltip(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <aside className="w-full flex flex-row justify-normal">
      <div className="p-2 border">
        <TooltipProvider>
          <Tooltip open={openTooltip} onOpenChange={setOpenTooltip}>
            <TooltipTrigger>
              <CreateEventButton />
            </TooltipTrigger>
            <TooltipContent>
              <p>
                Try clicking the mic icon below and say, Set an [event] [today].
              </p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <SmallCalendar />
      </div>
      <div className="ml-2 p-2">
        <EventLabels />
      </div>
    </aside>
  );
}
