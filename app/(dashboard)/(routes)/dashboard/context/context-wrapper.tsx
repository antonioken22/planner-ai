import React, {
  useState,
  useEffect,
  useReducer,
  useMemo,
  ReactNode,
} from "react";
import dayjs, { Dayjs } from "dayjs";

import GlobalContext, {
  AlanEvent,
  Event,
  Label,
  GlobalContextType,
} from "./global-context";

function savedEventsReducer(
  state: Event[],
  { type, payload }: { type: string; payload: Event }
) {
  switch (type) {
    case "push":
      return [...state, payload];
    case "update":
      return state.map((evt) => (evt.id === payload.id ? payload : evt));
    case "delete":
      return state.filter((evt) => evt.id !== payload.id);
    default:
      throw new Error();
  }
}

function initEvents(): Event[] {
  const storageEvents = localStorage.getItem("savedEvents");
  const parsedEvents: Event[] = storageEvents ? JSON.parse(storageEvents) : [];
  return parsedEvents;
}

interface ContextWrapperProps {
  children: ReactNode;
}

export default function ContextWrapper(
  props: ContextWrapperProps
): JSX.Element {
  const [monthIndex, setMonthIndex] = useState<number>(dayjs().month());
  const [smallCalendarMonth, setSmallCalendarMonth] = useState<number | null>(
    null
  );
  const [daySelected, setDaySelected] = useState<Dayjs>(dayjs());
  const [showEventModal, setShowEventModal] = useState<boolean>(false);
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const [labels, setLabels] = useState<Label[]>([]);
  const [savedEvents, dispatchCalEvent] = useReducer(
    savedEventsReducer,
    [],
    initEvents
  );
  const [alanEventData, setAlanEventData] = useState<Event | AlanEvent | null>(
    null
  );
  const [isSubmitted, setSubmitted] = useState<boolean>(false);

  const filteredEvents = useMemo(() => {
    return savedEvents.filter((evt) =>
      labels
        .filter((lbl) => lbl.checked)
        .map((lbl) => lbl.label)
        .includes(evt.label)
    );
  }, [savedEvents, labels]);

  useEffect(() => {
    localStorage.setItem("savedEvents", JSON.stringify(savedEvents));
  }, [savedEvents]);

  useEffect(() => {
    setLabels((prevLabels) => {
      return Array.from(
        new Set(savedEvents.map((evt: Event) => evt.label))
      ).map((label) => {
        const currentLabel = prevLabels.find((lbl) => lbl.label === label);
        return {
          label,
          checked: currentLabel ? currentLabel.checked : true,
        };
      });
    });
  }, [savedEvents]);

  useEffect(() => {
    if (smallCalendarMonth !== null) {
      setMonthIndex(smallCalendarMonth);
    }
  }, [smallCalendarMonth]);

  useEffect(() => {
    if (!showEventModal) {
      setSelectedEvent(null);
      setAlanEventData(null);
    }
  }, [showEventModal]);

  function updateLabel(label: Label): void {
    setLabels(labels.map((lbl) => (lbl.label === label.label ? label : lbl)));
  }

  const contextValue: GlobalContextType = {
    monthIndex,
    setMonthIndex,
    smallCalendarMonth,
    setSmallCalendarMonth,
    daySelected,
    setDaySelected,
    showEventModal,
    setShowEventModal,
    dispatchCalEvent,
    selectedEvent,
    setSelectedEvent,
    savedEvents,
    setLabels,
    labels,
    updateLabel,
    filteredEvents,
    alanEventData,
    setAlanEventData,
    isSubmitted,
    setSubmitted,
  };

  return (
    <GlobalContext.Provider value={contextValue}>
      {props.children}
    </GlobalContext.Provider>
  );
}
