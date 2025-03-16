// import TechMarquee from "@/components/builtwith";
import { FAQ } from "@/components/faq";
import Features from "@/components/features";
// import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { Newsletter } from "@/components/newsletter";
import Templates from "@/components/templates";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "SanityStarters - Directory of Best Sanity Templates",
  description: "Get your site live in no time with Sanity Templates",
};

export default function Home() {
  return (
    <main className="min-h-screen">
      <div className="relative w-full overflow-hidden">
        <Hero />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* <div className="py-8 sm:py-12">
          <TechMarquee />
        </div> */}

        <div className="py-12 sm:py-16">
          <Templates />
        </div>

        <div className="py-12 sm:py-16">
          <Features />
        </div>

        <div className="py-12 sm:py-16">
          <FAQ />
        </div>
      </div>

      <div className="mt-8">
        <Newsletter />
      </div>
    </main>
  );
}
