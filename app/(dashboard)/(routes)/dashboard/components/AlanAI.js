"use client";

import { useContext, useEffect, useState } from "react";
import alanBtn from "@alan-ai/alan-sdk-web";
import dayjs from "dayjs";

import GlobalContext from "../context/GlobalContext";

const alanKey = process.env.NEXT_PUBLIC_ALAN_SDK_KEY;

export default function AlanAI() {
  const { setShowEventModal, setDaySelected, setAlanEventData, setSubmitted } =
    useContext(GlobalContext);

  useEffect(() => {
    alanBtn({
      key: alanKey,
      onCommand: ({ command, data }) => {
        switch (command) {
          case "createEvent":
            setDaySelected(dayjs(data.selectedDay));
            setAlanEventData(data);
            setShowEventModal(true);
            break;
          case "updateTitle":
            setAlanEventData(data);
            break;
          case "updateDescription":
            setAlanEventData(data);
            break;
          case "updateLabel":
            setAlanEventData(data);
            break;
          case "closeModal":
            setShowEventModal(false);
            break;
          case "saveEvent":
            setSubmitted(true);
            break;
          default:
            break;
        }
      },
    });
  }, [setDaySelected, setShowEventModal, setAlanEventData, setSubmitted]);

  return null;
}
