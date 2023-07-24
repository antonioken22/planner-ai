"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("b2286dda-72f3-41c6-8c78-741cb91edc98");
  }, []);

  return null;
};
