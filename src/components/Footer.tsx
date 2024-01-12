import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { Github, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <div className="pt-4 border-t border-t-border">
      <p className="text-center">Developed By Aryan Thakur</p>
      <div className="w-fit mx-auto my-2 flex gap-2">
        <Link
          href="https://www.linkedin.com/in/aryan-thakur-73b251250/"
          className={cn(
            buttonVariants({ variant: "secondary" }),
            "rounded-full h-8 w-8 p-2",
          )}
        >
          <Linkedin />
        </Link>
        <Link
          href="https://www.instagram.com/aryan_thakur1020/"
          className={cn(
            buttonVariants({ variant: "secondary" }),
            "rounded-full h-8 w-8 p-2",
          )}
        >
          <Instagram />
        </Link>
        <Link
          href="https://github.com/aryanthakur01"
          className={cn(
            buttonVariants({ variant: "secondary" }),
            "rounded-full h-8 w-8 p-2",
          )}
        >
          <Github />
        </Link>
      </div>
    </div>
  );
};

export default Footer;
