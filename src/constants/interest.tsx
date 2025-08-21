import type { BentoGridItemProps } from "@/components/BentoGrid";
import { CgGym } from "solid-icons/cg";
import { RiMediaCameraLensLine } from "solid-icons/ri";
import { FaSolidPlaneDeparture, FaSolidBookOpen } from "solid-icons/fa";

export const interests: BentoGridItemProps[] = [
  {
    header: (
      <FaSolidPlaneDeparture class="w-24 h-24 m-auto opacity-70 group-hover/bento:rotate-3 transition-all" />
    ),
    title: "Travelling",
    description: "I love exploring new places and cultures.",
    class: "bg-neutral-50 sm:col-span-2",
  },
  {
    header: (
      <RiMediaCameraLensLine class="w-24 h-24 m-auto opacity-70 group-hover/bento:rotate-3 transition-all" />
    ),
    title: "Photography",
    description: "I enjoy capturing moments through my lens.",
    class: "bg-neutral-50",
  },
  {
    header: (
      <CgGym class="w-24 h-24 m-auto opacity-70 group-hover/bento:rotate-3 transition-all" />
    ),
    title: "Gym",
    description: "I like to stay fit and healthy through regular workouts.",
    class: "bg-neutral-50",
  },
  {
    header: (
      <FaSolidBookOpen class="w-24 h-24 m-auto opacity-70 group-hover/bento:rotate-3 transition-all" />
    ),
    title: "Reading",
    description: "I enjoy reading books and articles on wide-ranging topics.",
    class: "bg-neutral-50 sm:col-span-2",
  },
];
