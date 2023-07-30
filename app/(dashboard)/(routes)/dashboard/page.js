"use client";

import React from "react";
import CalendarApp from "./CalendarApp";

import ContextWrapper from "./context/ContextWrapper";

export default function HomePage() {
  return (
    <div>
      <div className="mb-4 space-y-2">
        <h2 className="text-2xl md:text-4xl font-bold text-center text-maroon-800">
          Improve Your Productivity
        </h2>
        <p className="text-muted-foreground font-light text-sm md:text-lg text-center">
          Utilize Our Smart Assistant - And Beyond
        </p>
      </div>
      <div>
        <ContextWrapper>
          <CalendarApp />
        </ContextWrapper>
      </div>
    </div>
  );
}
