"use client";

import React from "react";

import AlanAI from "./components/alan-ai";
import CalendarApp from "./calendar-app";
import ContextWrapper from "./context/context-wrapper";

export default function HomePage() {
  return (
    <div className="w-full h-screen">
      <div className="mb-4 space-y-2">
        <h2 className="text-2xl font-bold text-center text-maroon-800">
          Improve Your Productivity
        </h2>
        <p className="text-muted-foreground font-light text-sm text-center">
          Utilize Our Smart Assistant - And Beyond
        </p>
      </div>
      <div>
        <ContextWrapper>
          <AlanAI />
          <CalendarApp />
        </ContextWrapper>
      </div>
    </div>
  );
}
