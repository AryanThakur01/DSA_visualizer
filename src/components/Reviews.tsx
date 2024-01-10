"use client";
import { Loader, Send, Star } from "lucide-react";
import React, { FC, useEffect, useRef, useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { cn } from "@/lib/utils";
import Image from "next/image";

interface IReviews {
  title: string;
}
interface IReviewList {
  id: string;
  review: string;
  visualName: string;
  pageLink: string;
  writerId: string;
  writer: IWriter;
}
interface IWriter {
  name: string;
  email: string;
  image: string;
}

const Reviews: FC<IReviews> = ({ title }) => {
  const [write, setWrite] = useState(false);
  const [writing, setWriting] = useState(false);
  const [reviewList, setReviewList] = useState<Array<IReviewList>>();
  const inputRef = useRef<HTMLInputElement>(null);

  const getReviews = async () => {
    let res: Response = await fetch("/api/reviews", {
      method: "GET",
    });
    setReviewList(await res.json());
  };

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
    console.log(await res.json());
    getReviews();
    setWriting(false);
  };
  useEffect(() => {
    if (write) {
      inputRef.current?.focus();
    }
  }, [write]);
  useEffect(() => {
    getReviews();
  }, []);
  return (
    <>
      <h2 className="text-2xl font-bold mb-4">Reviews</h2>
      <div className="flex justify-between flex-wrap gap-4 mb-4">
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
      {/* {JSON.stringify(reviewList)} */}
      {reviewList?.map((message) => (
        <div key={message.id}>
          <div className="flex gap-4">
            <Image
              height={50}
              width={50}
              src={message.writer.image}
              className="rounded-full h-8 w-8 relative top-1"
              alt={message.writer.name[0]}
            />
            <div>
              <p className="font-bold">{message.writer.name}</p>
              <p className="text-muted-foreground text-xs">
                {message.writer.email}
              </p>
              <p className="text-sm mt-2 mb-8 text-muted-foreground italic">
                &quot;{message.review}&quot;
              </p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Reviews;
