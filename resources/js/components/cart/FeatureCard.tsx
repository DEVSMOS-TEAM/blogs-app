import { ArrowUpRight } from "lucide-react";

type FeatureCardProps = {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  description: string;
};

export default function FeatureCard({ icon, title, subtitle, description }: FeatureCardProps) {
  return (
    <div className="flex flex-col justify-between bg-neutral-900 border border-neutral-800  p-6 h-full">
      <div className="space-y-2">
        <div className="text-3xl">{icon}</div>
        <h3 className="text-white text-lg font-semibold">{title}</h3>
        <p className="text-gray-400 text-sm">{subtitle}</p>
        <p className="text-gray-400 text-sm">{description}</p>
      </div>
      <div className="mt-6 flex justify-end">
        <div className="p-2 bg-yellow-400 rounded-full text-black">
          <ArrowUpRight className="w-4 h-4" />
        </div>
      </div>
    </div>
  );
}
