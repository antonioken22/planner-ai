import { Code, ImageIcon, MessageSquare, Music, VideoIcon } from "lucide-react";

export const MAX_FREE_COUNTS = 8;

export const tools = [
  {
    label: "Conversation",
    icon: MessageSquare,
    href: "/conversation",
    color: "text-maroon-800",
    bgColor: "bg-maroon-800/10",
  },
  {
    label: "Code Generation",
    icon: Code,
    color: "text-maroon-800",
    bgColor: "bg-maroon-800/10",
    href: "/code",
  },
  {
    label: "Image Generation",
    icon: ImageIcon,
    color: "text-maroon-800",
    bgColor: "bg-maroon-800/10",
    href: "/image",
  },
  {
    label: "Music Generation",
    icon: Music,
    href: "/music",
    color: "text-maroon-800",
    bgColor: "bg-maroon-800/10",
  },
  {
    label: "Video Generation",
    icon: VideoIcon,
    color: "text-maroon-800",
    bgColor: "bg-maroon-800/10",
    href: "/video",
  },
];
