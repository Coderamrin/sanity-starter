import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";

export function Hero() {
  return (
    <div className="relative isolate">
      {/* Background gradient */}
      <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
        <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-purple-500 to-blue-500 opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" />
      </div>

      <div className="mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pb-32 lg:flex lg:px-8 lg:py-40">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl lg:flex-shrink-0 lg:pt-8">
          <div className="flex items-center gap-x-4">
            <Badge variant="secondary" className="rounded-full bg-transparent border-2 border-purple-500/20 font-normal">
              Best Sanity Templates
            </Badge>
          </div>
          <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-6xl bg-clip-text">
            Build faster with Sanity Starter templates
          </h1>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Launch your next project faster with our collection of professional
            Sanity.io templates. Built with modern tech stacks and best
            practices for content modeling.
          </p>
          <div className="mt-10 flex items-center gap-x-6">
            <Link href="/templates">
              <Button
                size="lg"
                className="rounded-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
              >
                Browse Templates
              </Button>
            </Link>
            <Link href="/submit-template">
              <Button
                size="lg"
                variant="outline"
                className="rounded-full border-2"
              >
                Submit Template
              </Button>
            </Link>
          </div>
        </div>

        <div className="mx-auto mt-16 flex max-w-2xl sm:mt-24 lg:ml-10 lg:mt-0 lg:max-w-none lg:flex-none xl:ml-32">
          <div className="relative flex-none">
            <Image
              src="/hero-image.png"
              alt="Sanity Studio interface showcase"
              width={1200}
              height={800}
              className="w-auto h-[400px] lg:h-[450px] rounded-md bg-white/5 shadow-2xl ring-1 ring-white/10 object-cover"
              priority
            />
          </div>
        </div>
      </div>

      {/* Bottom gradient */}
      <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
        <div className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-blue-500 to-purple-500 opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]" />
      </div>
    </div>
  );
}
