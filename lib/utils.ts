import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
export const cardData = [
  {
    id: 1,
    title: "Aurora Dreams",
    description: "A soft glassy card inspired by northern lights.",
    color: "from-[#a78bfa] to-[#818cf8]", // purple gradient
  },
  {
    id: 2,
    title: "Ocean Mist",
    description: "Cool glass texture with blue-green tones.",
    color: "from-[#34d399] to-[#3b82f6]", // teal-blue gradient
  },
  {
    id: 3,
    title: "Sunset Glow",
    description: "Warm glass reflections with orange hues.",
    color: "from-[#f59e0b] to-[#ef4444]", // orange-red gradient
  },
];
