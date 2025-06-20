import { IconStarFilled } from "@tabler/icons-react";

interface TestimonialCardProps {
  name: string;
  location: string;
  image: string;
  rating?: number;
  testimonial: string;
}

export function ReaderCart({
  name,
  location,
  image,
  rating = 5,
  testimonial,
}: TestimonialCardProps) {
  return (
    <div className="flex flex-col items-center rounded-xl bg-neutral-900 p-6 text-white shadow-lg">
      <img
        src={image}
        alt={name}
        className="mb-3 h-14 w-14 rounded-full object-cover border-2 border-neutral-800"
      />
      <div className="text-center">
        <div className="font-semibold text-lg">{name}</div>
        <div className="text-gray-400 text-sm mb-3">{location}</div>
      </div>
      <div className="flex justify-center mb-4 -mt-2">
        {Array.from({ length: rating }).map((_, i) => (
          <IconStarFilled key={i} className="h-5 w-5 text-yellow-400" />
        ))}
      </div>
      <div className="rounded-xl bg-neutral-800/70 p-4 text-center text-gray-200 border border-neutral-700">
        {testimonial}
      </div>
    </div>
  );
}