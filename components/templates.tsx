"use client";
import { Button } from "@/components/ui/button";
import { Badge } from "./ui/badge";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const templates = [
  {
    title: "Blog Starter",
    description:
      "A fully featured blog template with categories, authors, and SEO optimization. Perfect for content creators and publishers.",
    price: "$49.99",
    rating: 4.8,
    reviews: 124,
    category: "Blog",
    features: ["Next.js 14", "TypeScript", "SEO Optimized"],
    link: "/templates/blog-starter",
    available: false,
  },
  {
    title: "SaaS Starter",
    description:
      "A fully featured SaaS template with authentication, payment, and CMS. Perfect for SaaS startups.",
    price: "$79.99",
    rating: 4.9,
    reviews: 89,
    category: "SaaS",
    features: ["Next.js 15", "Stripe Integration", "CMS", "Authentication", "Blog"],
    link: "/templates/ecommerce-store",
    available: false,
  },
  {
    title: "Portfolio Starter",
    description:
      "Showcase your work with this beautiful portfolio template. Includes project galleries, case studies, and contact forms.",
    price: "$39.99",
    rating: 4.7,
    reviews: 156,
    category: "Portfolio",
    features: ["Next.js 14", "Image Gallery", "Case Studies", "Contact Form"],
    link: "/templates/portfolio-pro",
    available: false,
  },
];

const Templates = () => {
  return (
    <section id="templates" className="relative scroll-mt-20">
      <div className="mx-auto max-w-2xl text-center mb-16">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl ">
          Best Sanity Templates
        </h2>
        <p className="mt-6 text-lg leading-8 text-muted-foreground">
          Start your next project with our professionally crafted Sanity.io
          templates. Each template includes a complete Sanity Studio setup and
          frontend implementation.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {templates.map((template, index) => (
          <div
            key={index}
            className="rounded-2xl border-2 bg-card p-6 shadow-sm hover:shadow-lg transition-all duration-300 hover:border-purple-500/20 flex flex-col justify-between"
          >
            <div>
              <Badge variant="secondary" className="mb-4">
                {template.category}
              </Badge>
            </div>

            <h3 className="text-2xl font-bold">{template.title}</h3>
            <p className="mt-2 text-muted-foreground">{template.description}</p>

            <div className="mt-4 flex flex-wrap gap-2">
              {template.features.map((feature, i) => (
                <Badge key={i} variant="outline" className="bg-purple-500/5">
                  {feature}
                </Badge>
              ))}
            </div>

            <div className="mt-6 flex items-center justify-between">
              {/* <span className="text-2xl font-bold">{template.price}</span> */}
              <Button
                className={cn(
                  "relative",
                  template.available
                    ? "bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
                    : "bg-gray-100 text-gray-500 cursor-not-allowed hover:bg-gray-100"
                )}
                disabled={!template.available}
                onClick={() =>
                  template.available && window.open(template.link, "_self")
                }
              >
                {template.available ? (
                  <>
                    View Template <ArrowRight className="ml-2 h-4 w-4" />
                  </>
                ) : (
                  <>
                    Coming Soon{" "}
                    <span className="absolute -top-1 -right-1 flex h-3 w-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-purple-500"></span>
                    </span>
                  </>
                )}
              </Button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Templates;
