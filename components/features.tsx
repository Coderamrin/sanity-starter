import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Code2, Rocket, Shapes, Zap } from "lucide-react";

const features = [
  {
    title: "Production-Ready Setup",
    description: "Each template comes with a complete Sanity Studio configuration, content models, and frontend implementation using Next.js.",
    icon: Rocket,
  },
  {
    title: "Modern Tech Stack",
    description: "Built with Next.js 14, TypeScript, and Tailwind CSS. Includes GROQ queries and real-time preview functionality.",
    icon: Code2,
  },
  {
    title: "Flexible Content Models",
    description: "Well-structured Sanity schemas that are easy to customize and extend for your specific needs.",
    icon: Shapes,
  },
  {
    title: "Performance Optimized",
    description: "Optimized for speed with built-in caching, dynamic imports, and efficient data fetching strategies.",
    icon: Zap,
  },
];

const Features = () => {
  return (
    <div className="relative scroll-mt-20" id="usecase">
      <div className="mx-auto max-w-2xl text-center mb-16">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl ">
          Built for Modern Development
        </h2>
        <p className="mt-6 text-lg leading-8 text-muted-foreground">
          Our templates follow Sanity.io best practices and modern web development standards to help you build better content-driven applications.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {features.map((feature, index) => (
          <Card key={index} className="border-2 hover:border-purple-500/20 transition-all duration-300 hover:shadow-lg">
            <CardHeader>
              <div className="h-12 w-12 rounded-lg bg-purple-500/10 flex items-center justify-center mb-4">
                <feature.icon className="h-6 w-6 text-purple-600" />
              </div>
              <CardTitle className="text-xl">{feature.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                {feature.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Features;
