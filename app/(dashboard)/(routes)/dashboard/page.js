"use client";

import React from "react";
import CalendarApp from "./CalendarApp";

import ContextWrapper from "@/components/context/ContextWrapper";

export default function HomePage() {
  return (
    <div>
      <div className="mb-8 space-y-4">
        <h2 className="text-2xl md:text-4xl font-bold text-center text-maroon-800">
          Improve Your Productivity
        </h2>
        <p className="text-muted-foreground font-light text-sm md:text-lg text-center">
          Utilize Our Smart Assistant - And Beyond
        </p>
      </div>
      <div>
        <link
          href="https://fonts.googleapis.com/css?family=Material+Icons|Material+Icons+Outlined|Material+Icons+Two+Tone|Material+Icons+Round|Material+Icons+Sharp"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
        <ContextWrapper>
          <CalendarApp />
        </ContextWrapper>
      </div>
    </div>
  );
}
