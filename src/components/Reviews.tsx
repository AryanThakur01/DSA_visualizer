"use client";
import { Loader, Send, Star } from "lucide-react";
import React, { FC, useEffect, useRef, useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { cn } from "@/lib/utils";

interface IReviews {
  title: string;
}

const Reviews: FC<IReviews> = ({ title }) => {
  const [write, setWrite] = useState(false);
  const [writing, setWriting] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  // Feature to write a review
  const writeReview = async () => {
    setWriting(true);
    if (!inputRef.current) return;
    let message = inputRef.current.value;
    inputRef.current.value = "";
    message = message.trim();
    if (message.length === 0) return;
    const body = {
      review: message,
      visualName: title,
      pageLink: window.location.pathname,
    };
    let res: Response = await fetch("/api/reviews", {
      method: "POST",
      body: JSON.stringify(body),
    });
    console.log(res.json());
    setWriting(false);
  };
  useEffect(() => {
    if (write) {
      inputRef.current?.focus();
    }
  }, [write]);
  return (
    <>
      <h2 className="text-2xl font-bold mb-4">Reviews</h2>
      <div className="flex justify-between flex-wrap gap-4">
        <div className="flex items-center gap-4 flex-wrap">
          <div className="flex gap-1">
            <Star height={20} className="fill-yellow-300 stroke-yellow-300" />
            <Star height={20} className="fill-yellow-300 stroke-yellow-300" />
            <Star height={20} className="fill-yellow-300 stroke-yellow-300" />
            <Star height={20} className="fill-yellow-300 stroke-yellow-300" />
            <Star height={20} className="fill-yellow-300 stroke-yellow-300" />
          </div>
          <span className="text-muted-foreground">Based on 10 reviews</span>
        </div>
        <Button
          className="rounded-full text-sm"
          variant="outline"
          onClick={() => {
            setWrite(!write);
          }}
        >
          Write a review
        </Button>
      </div>
      <div className={cn("my-8 flex items-center", !write && "hidden")}>
        <Input
          placeholder="Enter Your Review"
          className="border-transparent border-b-2 border-b-border w-full focus-visible:ring-transparent focus-visible:border-b-primary"
          ref={inputRef}
        />
        <Button
          className="rounded-full text-white w-24 text-center"
          onClick={writeReview}
          disabled={writing}
        >
          {writing ? (
            <Loader className="animate-spin" />
          ) : (
            <>
              <span>Send</span>
              <Send height={16} />
            </>
          )}
        </Button>
      </div>
    </>
  );
};

export default Reviews;
