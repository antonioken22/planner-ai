import { useEffect } from "react";
import alanBtn from "@alan-ai/alan-sdk-web";

interface CommandData {
  command: string;
}

export const AlanAI = () => {
  useEffect(() => {
    const alanKey =
      "68a1c5c9eb55651c06abca5c77a850da2e956eca572e1d8b807a3e2338fdd0dc/stage";

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
