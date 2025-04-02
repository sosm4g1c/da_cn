/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import React from "react";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import Link from "next/link";
import Image from "next/image";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { navLinks } from "@/constants";
import { usePathname } from "next/navigation";
// import { Button } from "../ui/button";

const MobileNav = () => {
  const pathname = usePathname();
  return (
    <header className="header flex items-center justify-between px-4 py-2">
      {/* Logo bên trái */}
      <Link href="/" className="flex items-center gap-2">
        <Image
          src="/assets/images/logo-text.png"
          alt="logo"
          width={180}
          height={28}
        />
      </Link>

      {/* Navigation bên phải */}
      <nav className="flex items-center gap-4">
        <SignedIn>
          <UserButton afterSwitchSessionUrl="/" />

          <Sheet>
            <SheetTitle></SheetTitle>
            <SheetTrigger>
              <Image
                src="\assets\icons\menu.svg"
                alt="menu"
                width={32}
                height={32}
                className="cursor-pointer"
              />
            </SheetTrigger>

            <SheetContent className="sheet-content sm:w-64">
              <>
                <Image
                  src="/assets/images/logo-text.png"
                  alt="logo"
                  width={152}
                  height={23}
                />
                <ul className="header-nav_elements">
                  {navLinks.slice(0).map((link) => {
                    const isActive = link.route === pathname;
                    return (
                      <li
                        key={link.route}
                        className={`${
                          isActive && "text-purple-700"
                        } p-4 flex whitespace-nowrap text-dark-700`}
                      >
                        <Link
                          className="sidebar-link cursor-pointer"
                          href={link.route}
                        >
                          <Image
                            src={link.icon}
                            alt={"Logo"}
                            width={16}
                            height={16}
                          />
                          {link.label}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
                {/* logout button  */}

              </>
            </SheetContent>
          </Sheet>
        </SignedIn>
      </nav>
    </header>
  );
};

export default MobileNav;
