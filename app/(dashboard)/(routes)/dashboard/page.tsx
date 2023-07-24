"use client";

import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";

import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

import { tools } from "@/constants";

export default function HomePage() {
  const router = useRouter();

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
      <div className="px-4 md:px-20 lg:px-32 space-y-4 text-center">
        <h1 className="font-bold">Todo List and Event Calendar Here</h1>
        <h2 className="text-sm text-muted-foreground">
          Feature still under devlopment. Sorry for the inconvenience.
        </h2>
      </div>
    </div>
  );
}
