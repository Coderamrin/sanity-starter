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

      <div className="mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pt-32 lg:flex lg:px-8 lg:pt-40">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl lg:flex-shrink-0 lg:pt-8">
          <div className="flex items-center gap-x-4">
            <Badge
              variant="secondary"
              className="rounded-full bg-transparent border-2 border-purple-500/20 font-normal"
            >
              Best Sanity Templates
            </Badge>
          </div>
          <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-6xl !leading-tight ">
            Jumpstart Your Development with Sanity Templates
          </h1>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Launch your next project faster with our collection of professional
            Sanity.io templates. Built with modern tech stacks and best
            practices for content modeling.
          </p>
          <div className="mt-10 flex items-center gap-x-6">
            <Button
              size="lg"
              className="rounded-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
              asChild
            >
              <Link href="/#templates">Browse Templates</Link>
            </Button>
          </div>
        </div>

        <div className="mx-auto mt-16 flex max-w-2xl sm:mt-24 lg:ml-10 lg:mt-0 lg:max-w-none lg:flex-none xl:ml-32">
          <div className="relative flex-none p-3 bg-white/5 shadow-2xl ring-1 ring-white/10 rounded-md">
            <Image
              src="/hero-image.png"
              alt="Sanity Studio interface showcase"
              width={1200}
              height={800}
              className="w-auto  rounded-md bg-white/5 shadow-2xl ring-1 ring-white/10 object-cover"
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
