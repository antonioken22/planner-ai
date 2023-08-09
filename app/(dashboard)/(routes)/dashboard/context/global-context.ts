import { Dayjs } from "dayjs";
import React, { Dispatch, SetStateAction } from "react";

export interface AlanEvent {
  id: number;
  title: string;
  selectedDay: string;
  description: string | undefined;
  startTime: string | undefined;
  endTime: string | undefined;
  label: string;
}

export interface Event {
  id: number;
  title: string;
  description: string | undefined;
  day: number | undefined;
  startTime: string | undefined;
  endTime: string | undefined;
  label: string;
}

export interface Label {
  label: string;
  checked: boolean;
}

export interface GlobalContextType {
  monthIndex: number;
  setMonthIndex: Dispatch<SetStateAction<number>>;
  smallCalendarMonth: number | null;
  setSmallCalendarMonth: Dispatch<SetStateAction<number | null>>;
  daySelected: Dayjs | null;
  setDaySelected: Dispatch<SetStateAction<Dayjs>>;
  showEventModal: boolean;
  setShowEventModal: Dispatch<SetStateAction<boolean>>;
  dispatchCalEvent: (action: { type: string; payload: Event }) => void;
  savedEvents: Event[];
  selectedEvent: Event | null;
  setSelectedEvent: Dispatch<SetStateAction<Event | null>>;
  labels: Label[];
  setLabels: Dispatch<SetStateAction<Label[]>>;
  updateLabel: (label: Label) => void;
  filteredEvents: Event[];
  alanEventData: Event | AlanEvent | null;
  setAlanEventData: Dispatch<SetStateAction<Event | AlanEvent | null>>;
  isSubmitted: boolean;
  setSubmitted: Dispatch<SetStateAction<boolean>>;
}

const GlobalContext = React.createContext<GlobalContextType>({
  monthIndex: 0,
  setMonthIndex: () => {},
  smallCalendarMonth: 0,
  setSmallCalendarMonth: () => {},
  daySelected: null,
  setDaySelected: () => {},
  showEventModal: false,
  setShowEventModal: () => {},
  dispatchCalEvent: () => {},
  savedEvents: [],
  selectedEvent: null,
  setSelectedEvent: () => {},
  setLabels: () => {},
  labels: [],
  updateLabel: () => {},
  filteredEvents: [],
  alanEventData: null,
  setAlanEventData: () => {},
  isSubmitted: false,
  setSubmitted: () => {},
});

export default GlobalContext;
