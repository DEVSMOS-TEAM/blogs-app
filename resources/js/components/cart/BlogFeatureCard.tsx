import { FC, ReactNode } from "react";

interface BlogFeatureCardProps {
  icon?: ReactNode;
  title: string;
  description: string;
}

const BlogFeatureCard: FC<BlogFeatureCardProps> = ({ icon, title, description }) => {
  return (
    <div className="rounded-lg bg-neutral-900 p-6 border border-neutral-800 transition">
      {icon && <div className="mb-3 text-yellow-400">{icon}</div>}
      <h3 className="text-lg font-semibold text-white">{title}</h3>
      <p className="mt-2 text-sm text-neutral-400">{description}</p>
    </div>
  );
};

export default BlogFeatureCard;
