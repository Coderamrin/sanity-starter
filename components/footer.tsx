import Link from "next/link";
import { Github, Twitter } from "lucide-react";

const navigation = {
  main: [
    { name: "Templates", href: "/#templates" },
    // { name: "Documentation", href: "/docs" },
    { name: "Contact", href: "https://x.com/coderamrin", target: "_blank" },
    {
      name: "About The Author",
      href: "https://coderamrin.com",
      target: "_blank",
    },
  ],
  social: [
    {
      name: "Twitter",
      href: "https://twitter.com/coderamrin",
      icon: Twitter,
    },
    {
      name: "GitHub",
      href: "https://github.com/coderamrin",
      icon: Github,
    },
  ],
};

export function Footer() {
  return (
    <footer className="bg-background">
      <div className="mx-auto max-w-7xl overflow-hidden px-6 py-20 sm:py-24 lg:px-8">
        <nav
          className="-mb-6 columns-2 sm:flex sm:justify-center sm:space-x-12"
          aria-label="Footer"
        >
          {navigation.main.map((item) => (
            <div key={item.name} className="pb-6">
              <Link
                href={item.href}
                className="text-sm leading-6 text-muted-foreground hover:text-foreground"
                target={item.target || "_self"}
              >
                {item.name}
              </Link>
            </div>
          ))}
        </nav>
        <div className="mt-10 flex justify-center space-x-10">
          {navigation.social.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-muted-foreground hover:text-foreground"
            >
              <span className="sr-only">{item.name}</span>
              <item.icon className="h-6 w-6" aria-hidden="true" />
            </Link>
          ))}
        </div>
        <p className="mt-10 text-center text-xs leading-5 text-muted-foreground">
          &copy; {new Date().getFullYear()} SanityStarters. All rights reserved.
          <br />
          Note: This website is not affiliated with Sanity.io in any way or
          form.
        </p>
      </div>
    </footer>
  );
}
