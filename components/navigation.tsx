"use client";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Button } from "./ui/button";
import { Menu } from "lucide-react";
import { usePathname } from "next/navigation";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";
import { useEffect, useState } from "react";

const MenuData = [
  {
    name: "Templates",
    href: "/#templates",
  },
  {
    name: "Use Cases",
    href: "/#usecase",
  },
  {
    name: "Blog",
    href: "/blog",
  },
  {
    name: "FAQ",
    href: "/#faq",
  },
];

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const pathname = usePathname();

  const handleStickyNavbar = () => {
    if (window.scrollY >= 80) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleStickyNavbar);
  });

  return (
    <header
      className={`fixed  left-0 top-0 z-[999] flex w-full items-center justify-center duration-200 ${
        sticky
          ? "bg-white/80 py-2 shadow backdrop-blur-[5px]"
          : "bg-transparent py-3"
      }`}
    >
      <div className="container mx-auto flex max-w-7xl items-center justify-between  sm:px-6 lg:px-8">
        <Link
          href="/"
          className="flex items-center gap-2 font-bold
        
        "
        >
          {" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-rocket"
          >
            <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
            <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
            <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
            <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
          </svg>{" "}
          SanityStarters
        </Link>

        <NavigationMenu className="mx-auto max-lg:hidden">
          <NavigationMenuList>
            {MenuData?.map((item, i) => (
              <NavigationMenuItem key={i}>
                <Link
                  href={item.href}
                  className={`pr-10 capitalize hover:bg-transparent hover:text-primary ${
                    pathname === item.href ? "text-primary" : ""
                  }`}
                >
                  {item.name}
                </Link>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        <div className="flex justify-center gap-2 max-lg:hidden">
          <Button asChild aria-label="Contact us">
            <Link href="/contact">Contact</Link>
          </Button>
        </div>

        <div className="lg:hidden">
          <Sheet>
            <SheetTrigger aria-label="Open menu">
              <span className="inline-block rounded-md p-1 hover:bg-gray-100">
                <Menu />
              </span>
            </SheetTrigger>
            <SheetContent className="w-2/3 border-black bg-black text-white md:w-[300px]">
              <SheetHeader className="sr-only">
                <SheetTitle>Edit profile</SheetTitle>
                <SheetDescription>
                  Make changes to your profile here. Click save when you&apos;re
                  done.
                </SheetDescription>
              </SheetHeader>

              <div className="mt-8 flex flex-col items-end justify-end gap-4 pr-5">
                {MenuData.map((item, i) => (
                  <Link
                    key={i}
                    href={item.href}
                    className={`capitalize hover:bg-transparent hover:text-primary`}
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="mt-4 flex justify-center gap-2">
                  <Button asChild aria-label="Contact us">
                    <Link href="/contact">Contact</Link>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
