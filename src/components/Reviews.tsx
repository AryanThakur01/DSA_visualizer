"use client";
import { Loader2, Send, Star } from "lucide-react";
import React, { FC, useEffect, useRef, useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { cn } from "@/lib/utils";
import Image from "next/image";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
interface IReviews {
  title: string;
}
interface IReviewList {
  id: string;
  review: string;
  visualName: string;
  pageLink: string;
  writerId: string;
  stars: number;
  writer: IWriter;
}
interface IWriter {
  name: string;
  email: string;
  image: string;
}

const Reviews: FC<IReviews> = ({ title }) => {
  const [writing, setWriting] = useState(false);
  const [reviewList, setReviewList] = useState<Array<IReviewList>>([]);
  const [reviewsLoading, setReviewsLoading] = useState(false);
  const [avgStar, setAvgStar] = useState(1);
  const inputRef = useRef<HTMLInputElement>(null);

  const getReviews = async () => {
    setReviewsLoading(true);
    let res: Response = await fetch(`/api/reviews?visualName=${title}`, {
      method: "GET",
    });
    setReviewList(await res.json());
    setReviewsLoading(false);
  };

  // Feature to write a review
  const writeReview = async (stars: number) => {
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
      stars,
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
    const len = reviewList.length;
    let starTotal = 0;
    for (let i = 0; i < len; i++) starTotal += reviewList[i].stars;
    setAvgStar(starTotal / reviewList.length);
  }, [reviewList]);
  useEffect(() => {
    getReviews();
  }, []);
  return (
    <>
      <h2 className="text-2xl font-bold mb-4">Reviews</h2>
      <div className="flex justify-between flex-wrap gap-4 mb-4">
        <div className="flex items-center gap-4 flex-wrap">
          <div className="flex gap-1">
            {Array.apply(null, Array(5)).map((_, index) => {
              if (index < avgStar)
                return (
                  <Star
                    height={20}
                    className="fill-yellow-300 stroke-yellow-300"
                    key={"Rating-" + index}
                  />
                );
              return <Star height={20} key={"Rating-" + index} />;
            })}
            {/* <Star height={20} className="fill-yellow-300 stroke-yellow-300" /> */}
            {/* <Star height={20} className="fill-yellow-300 stroke-yellow-300" /> */}
            {/* <Star height={20} className="fill-yellow-300 stroke-yellow-300" /> */}
            {/* <Star height={20} className="fill-yellow-300 stroke-yellow-300" /> */}
          </div>
          <span className="text-muted-foreground">
            Based on {reviewList.length} reviews
          </span>
        </div>
        <ReviewDialog
          inputRef={inputRef}
          writeReview={writeReview}
          writing={writing}
        />
      </div>
      {!reviewsLoading && reviewList.length === 0 && (
        <p className="text-muted-foreground text-center my-8">
          No Comments Found
        </p>
      )}
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

      {reviewsLoading && <Loader2 className="animate-spin mx-auto" />}
    </>
  );
};

interface IReviewDialog {
  inputRef: React.RefObject<HTMLInputElement>;
  writeReview: (stars: number) => {};
  writing: boolean;
}
const ReviewDialog: FC<IReviewDialog> = ({
  inputRef,
  writeReview,
  writing,
}) => {
  const [star, setStar] = useState(0);
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          className="rounded-full text-sm"
          disabled={writing}
        >
          {writing ? (
            <Loader2 className="animate-spin" />
          ) : (
            <span>Write a review</span>
          )}
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] border-border shadow-xl">
        <DialogHeader>
          <DialogTitle>Write a Review</DialogTitle>
        </DialogHeader>
        <div className="flex gap-1 mt-8">
          <Star
            height={20}
            className={cn(
              star >= 1 && "cursor-pointer stroke-yellow-300 fill-yellow-300",
            )}
            onMouseOver={() => setStar(1)}
          />
          <Star
            height={20}
            className={cn(
              star >= 2 && "cursor-pointer stroke-yellow-300 fill-yellow-300",
            )}
            onMouseOver={() => setStar(2)}
          />
          <Star
            height={20}
            className={cn(
              star >= 3 && "cursor-pointer stroke-yellow-300 fill-yellow-300",
            )}
            onMouseOver={() => setStar(3)}
          />
          <Star
            height={20}
            className={cn(
              star >= 4 && "cursor-pointer stroke-yellow-300 fill-yellow-300",
            )}
            onMouseOver={() => setStar(4)}
          />
          <Star
            height={20}
            className={cn(
              star >= 5 && "cursor-pointer stroke-yellow-300 fill-yellow-300",
            )}
            onMouseOver={() => setStar(5)}
          />
        </div>
        <div className="grid gap-4">
          <div className={cn("flex items-center")}>
            <Input
              placeholder="Enter Your Review"
              className="border-transparent border-b-2 border-b-border w-full focus-visible:ring-transparent focus-visible:border-b-primary"
              ref={inputRef}
            />
          </div>
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button
              className="rounded-full text-white w-24 text-center"
              onClick={() => {
                if (star) writeReview(star);
              }}
            >
              <span>Send</span>
              <Send height={16} />
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default Reviews;
