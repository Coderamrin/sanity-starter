import { Button } from "@/components/ui/button";
import { Badge } from "./ui/badge";
import { ArrowRight, Star } from "lucide-react";

const templates = [
  {
    title: "Blog Starter",
    description: "A fully featured blog template with categories, authors, comments, and SEO optimization. Perfect for content creators and publishers.",
    price: "$49.99",
    rating: 4.8,
    reviews: 124,
    category: "Blog",
    features: ["Next.js 14", "TypeScript", "Comments System", "SEO Optimized"]
  },
  {
    title: "E-commerce Store",
    description: "Complete e-commerce solution with product management, cart, checkout, and order tracking. Built with modern tech stack.",
    price: "$79.99",
    rating: 4.9,
    reviews: 89,
    category: "E-commerce",
    features: ["Next.js 14", "Stripe Integration", "Shopping Cart", "Order Management"]
  },
  {
    title: "Portfolio Pro",
    description: "Showcase your work with this beautiful portfolio template. Includes project galleries, case studies, and contact forms.",
    price: "$39.99",
    rating: 4.7,
    reviews: 156,
    category: "Portfolio",
    features: ["Next.js 14", "Image Gallery", "Case Studies", "Contact Form"]
  }
];

const Templates = () => {
  return (
    <section id="templates" className="relative scroll-mt-20">
      <div className="mx-auto max-w-2xl text-center mb-16">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl ">
          Popular Sanity Templates
        </h2>
        <p className="mt-6 text-lg leading-8 text-muted-foreground">
          Start your next project with our professionally crafted Sanity.io templates. Each template includes a complete Sanity Studio setup and frontend implementation.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {templates.map((template, index) => (
          <div key={index} className="rounded-2xl border-2 bg-card p-6 shadow-sm hover:shadow-lg transition-all duration-300 hover:border-purple-500/20">
            <Badge variant="secondary" className="mb-4">
              {template.category}
            </Badge>
            
            <h3 className="text-2xl font-bold">{template.title}</h3>
            <p className="mt-2 text-muted-foreground">
              {template.description}
            </p>

            <div className="mt-4 flex flex-wrap gap-2">
              {template.features.map((feature, i) => (
                <Badge key={i} variant="outline" className="bg-purple-500/5">
                  {feature}
                </Badge>
              ))}
            </div>

            {/* <div className="mt-4 flex items-center gap-2">
              <Star className="h-5 w-5 text-yellow-400 fill-yellow-400" />
              <span className="font-medium">{template.rating}</span>
              <span className="text-muted-foreground">({template.reviews} reviews)</span>
            </div> */}

            <div className="mt-6 flex items-center gap-4">
              {/* <span className="text-2xl font-bold">{template.price}</span> */}

              <Button variant="outline" className="">
                Get Template
              </Button>

              <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
                View Template <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Templates;
