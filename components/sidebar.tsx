"use client";

import Link from "next/link";
import Image from "next/image";
import { Montserrat } from "next/font/google";
import {
  Code,
  ImageIcon,
  LayoutDashboard,
  MessageSquare,
  Music,
  Settings,
  VideoIcon,
} from "lucide-react";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";
import { FreeCounter } from "@/components/free-counter";

const montserrat = Montserrat({ weight: "600", subsets: ["latin"] });

const routes = [
  {
    label: "Dashboard",
    icon: LayoutDashboard,
    color: "text-goldPrimary",
    href: "/dashboard",
  },
  {
    label: "Conversation",
    icon: MessageSquare,
    color: "text-goldPrimary",
    href: "/conversation",
  },
  {
    label: "Code Generation",
    icon: Code,
    color: "text-goldPrimary",
    href: "/code",
  },
  {
    label: "Image Generation",
    icon: ImageIcon,
    color: "text-goldPrimary",
    href: "/image",
  },
  {
    label: "Music Generation",
    icon: Music,
    color: "text-goldPrimary",
    href: "/music",
  },
  {
    label: "Video Generation",
    icon: VideoIcon,
    color: "text-goldPrimary",
    href: "/video",
  },
  {
    label: "Settings",
    icon: Settings,
    color: "text-goldPrimary",
    href: "/settings",
  },
];

export const Sidebar = ({
  apiLimitCount = 0,
  isPro = false,
}: {
  apiLimitCount: number;
  isPro: boolean;
}) => {
  const pathname = usePathname();

  return (
    <div className="space-y-4 py-4 flex flex-col h-full bg-gradient-to-b bg-maroonPrimary text-white">
      <div className="px-3 py-2 flex-1">
        <Link href="/dashboard" className="flex items-center pl-3 mb-14">
          <div className="relative h-8 w-8 mr-4">
            <Image fill alt="Logo" src="/logo-citucpe.png" />
          </div>
          <h1
            className={cn(
              "text-2xl font-bold text-goldPrimary",
              montserrat.className
            )}
          >
            PlannerAI
          </h1>
        </Link>
        <div className="space-y-1">
          {routes.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              className={cn(
                "text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-white hover:bg-white/10 rounded-lg transition",
                pathname === route.href
                  ? "text-white bg-white/10"
                  : "text-zinc-200"
              )}
            >
              <div className="flex items-center flex-1">
                <route.icon className={cn("h-5 w-5 mr-3", route.color)} />
                {route.label}
              </div>
            </Link>
          ))}
        </div>
      </div>
      <FreeCounter apiLimitCount={apiLimitCount} isPro={isPro} />
    </div>
  );
};
