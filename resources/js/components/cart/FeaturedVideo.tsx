import { IconPlayerPlayFilled } from "@tabler/icons-react";

export function FeaturedVideo () {
  return (
    <div className="rounded-xl bg-neutral-900 p-4 text-white shadow-lg max-w-sm mx-auto">
      <div className="relative mb-4">
        <img
          src="https://immediate-sprint.com/assets/video-image.jpg"
          alt="Mental Health Awareness in the Workplace"
          className="w-full h-44 object-cover rounded-lg"
        />
        <span className="absolute bottom-3 left-3 flex items-center justify-center w-8 h-8 bg-white/90 rounded-full shadow">
          <IconPlayerPlayFilled className="text-black w-5 h-5" />
        </span>
        <span className="absolute bottom-3 right-3 text-xs text-gray-200 bg-black/60 px-2 py-0.5 rounded">
          2.30 min
        </span>
      </div>
      <div className="font-semibold text-base mb-1">
        Breaking the Silence: Mental Health Awareness in the Workplace
      </div>
      <div className="text-sm text-gray-300">
        An exploration of the importance of mental health awareness and the initiatives reshaping workplaces for employee well-being.
      </div>
    </div>
  );
}