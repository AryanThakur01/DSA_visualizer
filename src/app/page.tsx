import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Loader } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="w-full py-8 container md:flex md:flex-col md:items-center m-auto">
        <h1 className="font-bold text-3xl md:text-center">
          DATA STRUCTURES AND ALGORITHMS VISUALIZER
        </h1>
        <p className="max-w-[45rem] md:mx-auto">
          Get down all the concepts of datastructures and algorithms, with our
          modern visualizer app
        </p>
        <div className="flex gap-3 my-4 w-fit">
          <Link
            href="/stack"
            className={cn(buttonVariants({ variant: "outline" }), "mx-auto")}
          >
            GET STARTED
          </Link>
        </div>
      </div>
    </>
  );
}
