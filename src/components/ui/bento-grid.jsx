import React from "react";
import { cn } from "../lib/utils.js";
import {
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";

export const BentoGrid = ({ className, children }) => {
  return (
    <div
      className={cn(
        "grid grid-cols-2 gap-4 max-w-7xl mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

const BentoGridItem = ({ title, description, header, icon, className }) => {
  return (
    <div
      className={` bg-white dark:bg-gray-800 rounded-lg transition-shadow duration-300 ease-in-out shadow hover:shadow-xl ${className}`}
    >
      {header}
      <div className="flex items-center mt-4 space-x-3">
        {icon}
        <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-200">{title}</h2>
      </div>
      <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{description}</p>
    </div>
  );
};

export function BentoGridSecondDemo() {
  return (
    <BentoGrid className="max-w-4xl mx-auto">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={<Skeleton image={item.image} />}
          className={item.className}
          icon={item.icon}
        />
      ))}
    </BentoGrid>
  );
}

// Updated Skeleton component to accept and display an image
const Skeleton = ({ image }) => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl overflow-hidden">
    {image ? (
      <img
        src={image}
        alt=""
        className="object-cover w-full h-full"
      />
    ) : (
      <div className="bg-neutral-100 dark:bg-black border border-transparent dark:border-white/[0.2] w-full h-full" />
    )}
  </div>
);

// Items array with image URLs
const items = [
  {
    title: "ATHERA",
    description: "India's 1st Spatial AI Drone",
    image: "https://images.pexels.com/photos/1087180/pexels-photo-1087180.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    className: "",
  },
  {
    title: "JASPER",
    description: "Tactical and Confined space agnostic.",
    image: "https://images.pexels.com/photos/744366/pexels-photo-744366.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    className: "",
  }
];

export default BentoGridSecondDemo;
