import Image from "next/image";
import { Check, Star } from "lucide-react";

type Props = {
  src: string;
  text: React.ReactNode;
  name: string;
};

export const Testimonial = ({ src, text, name }: Props) => {
  return (
    <div className="flex flex-auto flex-col gap-4 lg:pr-8 xl:pr-20">
      <div className="flex gap-0.5 mb-2">
        <Star className="h-5 w-5 fill-green-600 text-green-600" />
        <Star className="h-5 w-5 fill-green-600 text-green-600" />
        <Star className="h-5 w-5 fill-green-600 text-green-600" />
        <Star className="h-5 w-5 fill-green-600 text-green-600" />
        <Star className="h-5 w-5 fill-green-600 text-green-600" />
      </div>
      <div className="text-lg leading-8">{text}</div>
      <div className="flex gap-4 mt-2">
        <Image
          src={src}
          alt="user"
          width={48}
          height={48}
          className="rounded-full h-12 w-12 object-cover"
        />
        <div className="flex flex-col">
          <p className="font-semibold">{name}</p>
          <div className="flex gap-1.5 items-center text-zinc-600">
            <Check className="h-4 w-4 stroke-[3px] text-green-600" />
            <p className="text-sm">Verified Purchase</p>
          </div>
        </div>
      </div>
    </div>
  );
};
