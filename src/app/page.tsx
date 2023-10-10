import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1 className="font-bold text-3xl ">
        DATA STRUCTURES AND ALGORITHMS VISUALIZER
      </h1>
      <p className="max-w-[45rem]">
        Get down all the concepts of datastructures and algorithms, with our
        modern visualizer app
      </p>
      <Link href="/stack">
        <Button variant="outline" className="self-center my-6">
          GET STARTED
        </Button>
      </Link>
    </>
  );
}
