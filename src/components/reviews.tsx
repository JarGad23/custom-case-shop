import Image from "next/image";
import { MaxWidthWrapper } from "./max-width-wrapper";
import { ReviewGrid } from "./review-grid";

export const Reviews = () => {
  return (
    <MaxWidthWrapper className="relative max-w-5xl">
      <Image
        width={200}
        height={200}
        alt="what people are buying"
        aria-hidden="true"
        src="/what-people-are-buying.png"
        className="absolute select-none hidden xl:block -left-32 top-1/3"
      />
      <ReviewGrid />
    </MaxWidthWrapper>
  );
};
