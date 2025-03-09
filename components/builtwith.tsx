"use client";

import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import Image from "next/image";

const technologies = [
  {
    name: "Next.js 14",
    description: "React framework with App Router & Server Components",
    icon: "/Nextjs.svg",
  },
  {
    name: "Sanity.io",
    description: "Headless CMS with real-time collaboration",
    icon: "/sanity.svg",
  },
  {
    name: "TypeScript",
    description: "Type-safe development with modern JavaScript",
    icon: "/typescripdt.svg",
  },
  {
    name: "Tailwind CSS",
    description: "Utility-first CSS framework",
    icon: "/tailwindcss.svg",
  },
  {
    name: "shadcn/ui",
    description: "High-quality reusable components",
    icon: "/shadcn.png",
  },
];

export default function BuiltWith() {
  return (
    <div>
      <h3 className="text-2xl font-bold text-center">Built With</h3>

      <div className="flex items-center gap-4 justify-center">
        {technologies.map((technology) => (
          <div key={technology.name} className="">
            <Image src={technology.icon} alt={technology.name} width={150} height={150} />
            {/* <p className="text-sm text-center">{technology.name}</p> */}
          </div>
        ))}
      </div>
    </div>
  );
}
