"use client";

import { useContext, useEffect } from "react";
import alanBtn from "@alan-ai/alan-sdk-web";
import GlobalContext from "../context/GlobalContext";

const alanKey = process.env.NEXT_PUBLIC_ALAN_SDK_KEY;

const AlanAI = () => {
  const { setShowEventModal } = useContext(GlobalContext);

  useEffect(() => {
    alanBtn({
      key: alanKey,
      onCommand: ({ command, data }) => {
        if (command === "createEvent") {
          setShowEventModal(true);
        } else if (command === "closeModal") {
          setShowEventModal(false);
        } else if (command === "saveEvent") {
          handleSubmit();
        }
      },
    });
  }, []);

  return null;
};

export default AlanAI;
