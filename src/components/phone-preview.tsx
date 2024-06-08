"use client";

import { CaseColor } from "@prisma/client";
import { ElementRef, useEffect, useRef, useState } from "react";
import { AspectRatio } from "./ui/aspect-ratio";
import Image from "next/image";
import { cn } from "@/lib/utils";

type Props = {
  croppedImageUrl: string;
  color: CaseColor;
};

export const PhonePreview = ({ color, croppedImageUrl }: Props) => {
  const ref = useRef<ElementRef<"div">>(null);
  const [renderedDimensions, setRenderedDimensions] = useState({
    height: 0,
    width: 0,
  });

  const handleResize = () => {
    if (!ref.current) return;

    const { height, width } = ref.current.getBoundingClientRect();

    setRenderedDimensions({ height, width });
  };

  useEffect(() => {
    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [ref.current]);

  let caseBackgroundColor = "bg-zinc-950";

  switch (color) {
    case "black":
      caseBackgroundColor = "bg-zinc-950";
      break;
    case "blue":
      caseBackgroundColor = "bg-blue-950";
      break;
    case "rose":
      caseBackgroundColor = "bg-rose-950";
      break;
    case "yellow":
      caseBackgroundColor = "bg-yellow-400";
      break;
    case "green":
      caseBackgroundColor = "bg-lime-500";
      break;
  }

  return (
    <AspectRatio ref={ref} ratio={3000 / 2001} className="relative">
      <div
        className="absolute z-20 scale-[1.0352]"
        style={{
          left:
            renderedDimensions.width / 2 -
            renderedDimensions.width / (1216 / 121),
          top: renderedDimensions.height / 6.22,
        }}
      >
        <Image
          width={renderedDimensions.width / (3000 / 637)}
          height={200}
          className={cn(
            "phone-skew relative z-20 rounded-t-[15px] rounded-b-[10px] md:rounded-t-[30px] md:rounded-b-[20px]",
            caseBackgroundColor
          )}
          alt="user image"
          src={croppedImageUrl}
        />
      </div>
      <div className="relative h-full w-full z-40">
        <Image
          fill
          alt="phone"
          src="/clearphone.png"
          className="pointer-events-none h-full w-full rounded-md"
        />
      </div>
    </AspectRatio>
  );
};
