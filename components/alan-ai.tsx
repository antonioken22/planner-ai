"use client";

import { useEffect } from "react";
import alanBtn from "@alan-ai/alan-sdk-web";

interface CommandData {
  command: string;
}

export const AlanAI = () => {
  useEffect(() => {
    const alanKey = process.env.NEXT_PUBLIC_ALAN_SDK_KEY!;

    alanBtn({
      key: alanKey,
      onCommand: (data: any) => {
        const { command } = data as CommandData;
        if (command === "testCommand") {
          alert("This code was executed");
        }
      },
    });
  }, []);

  return null;
};
