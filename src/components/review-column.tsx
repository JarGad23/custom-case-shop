import { cn } from "@/lib/utils";
import { ElementRef, useEffect, useRef, useState } from "react";
import { Review } from "./review";

type Props = {
  reviews: string[];
  className?: string;
  reviewClassName?: (reviewIndex: number) => string;
  msPerPixel?: number;
};

export const ReviewColumn = ({
  reviews,
  className,
  reviewClassName,
  msPerPixel = 0,
}: Props) => {
  const columnRef = useRef<ElementRef<"div"> | null>(null);
  const [columnHeight, setColumnHeight] = useState(0);
  const duration = `${columnHeight * msPerPixel}ms`;

  useEffect(() => {
    if (!columnRef.current) return;

    const resizeObserver = new window.ResizeObserver(() => {
      setColumnHeight(columnRef.current?.offsetHeight ?? 0);
    });

    resizeObserver.observe(columnRef.current);

    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <div
      ref={columnRef}
      className={cn("animate-marquee space-y-8 py-4", className)}
      style={{ "--marquee-duration": duration } as React.CSSProperties}
    >
      {reviews.concat(reviews).map((imgSrc, index) => (
        <Review
          key={`review-${index}`}
          className={reviewClassName?.(index % reviews.length)}
          imgSrc={imgSrc}
        />
      ))}
    </div>
  );
};
