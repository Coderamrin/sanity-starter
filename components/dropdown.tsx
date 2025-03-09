import { ChevronDown } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import { usePathname } from "next/navigation";

const Dropdown = ({ menuItem }: any) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const pathname = usePathname();

  return (
    <div className="group relative">
      <button
        onClick={() => setDropdownOpen(!dropdownOpen)}
        className={
          "relative flex cursor-pointer items-center justify-between gap-1 group-hover:text-primary lg:inline-flex"
        }
      >
        {menuItem?.name}

        <ChevronDown
          className={`${
            dropdownOpen ? "rotate-180" : ""
          } h-5 w-5 transition duration-300 group-hover:rotate-180`}
          aria-hidden="true"
        />
      </button>

      <div
        className={`${
          dropdownOpen ? "block" : "hidden lg:block"
        } lg:border-stroke left-0 top-full mt-2 rounded-md md:px-5 lg:invisible lg:absolute lg:top-[120%] lg:w-[265px] lg:border lg:bg-white lg:p-3 lg:opacity-0 lg:shadow-[0px_5px_10px_0px_rgba(0,0,0,0.05)] lg:duration-300 lg:group-hover:visible lg:group-hover:top-full lg:group-hover:opacity-100`}
      >
        <span className="border-stroke absolute -top-1.5 left-12 hidden h-3 w-3 rotate-45 rounded-sm border-l border-t bg-white lg:block" />
        {menuItem?.submenu.map((submenuItem: any, index: number) => {
          return (
            <Link
              href={submenuItem?.href}
              className={`group mb-2.5 flex items-center justify-between rounded px-4 py-2 text-sm capitalize text-white duration-300 last-of-type:mb-0 hover:bg-primary/5 md:text-black ${
                pathname === submenuItem?.href ? "bg-primary/5" : ""
              }`}
              key={index}
            >
              {submenuItem?.name}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Dropdown;