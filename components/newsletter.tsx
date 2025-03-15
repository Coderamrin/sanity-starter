"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { cn } from "@/lib/utils";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch(
        "https://api.convertkit.com/v3/forms/YOUR_FORM_ID/subscribe",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            api_key: process.env.NEXT_PUBLIC_CONVERTKIT_API_KEY,
            email: email,
          }),
        }
      );

      const data = await response.json();

      if (response.ok) {
        setStatus("success");
        setMessage(
          "Thanks for subscribing! Please check your email to confirm."
        );
        setEmail("");
      } else {
        throw new Error(data.message || "Something went wrong!");
      }
    } catch (error) {
      setStatus("error");
      setMessage(
        error instanceof Error ? error.message : "Something went wrong!"
      );
    }
  };

  return (
    <section
      id="newsletter"
      className="relative isolate overflow-hidden bg-gradient-to-b from-purple-50/50"
    >
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600">
            Stay Updated
          </h2>
          <p className="mt-4 text-lg leading-8 text-muted-foreground">
            Subscribe to get notified about new Sanity templates, tutorials, and
            best practices.
          </p>
          <form
            onSubmit={handleSubmit}
            className="mt-8 flex max-w-md mx-auto gap-x-4"
          >
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="min-w-0 flex-auto rounded-full border-2 focus-visible:ring-purple-500"
              disabled={status === "loading"}
            />
            <Button
              type="submit"
              className="rounded-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
              disabled={status === "loading"}
            >
              {status === "loading" ? "Subscribing..." : "Subscribe"}
            </Button>
          </form>
          {message && (
            <p
              className={cn(
                "mt-4 text-sm",
                status === "success" ? "text-green-600" : "text-red-600"
              )}
            >
              {message}
            </p>
          )}
        </div>
      </div>

      {/* Background gradient effect */}
      <div
        className="absolute left-1/2 top-0 -z-10 -translate-x-1/2 blur-3xl xl:-top-6"
        aria-hidden="true"
      >
        <div className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-purple-500 to-blue-500 opacity-10" />
      </div>
    </section>
  );
}
