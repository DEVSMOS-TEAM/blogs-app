import { IconArrowUpRight } from "@tabler/icons-react";
import Logo from '../../../../public/logo.svg'

export function FutureTechSection() {
  return (
      <div className=" mx-auto flex flex-col md:flex-row  gap-8">      
        <div className="flex-1">
          <div className="mb-2">
            <span className="inline-block bg-neutral-800 text-gray-100 text-xs px-4 py-1 rounded mb-2">
              Learn, Connect, and Innovate
            </span>
          </div>
            <div className="flex flex-col items-center md:items-start">
          <img
            src={Logo}
            alt="Future Tech Logo"
            className="w-20 h-20 mb-4"
          />
        </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            Be Part of the Future Tech Revolution
          </h2>
          <p className="text-gray-300 mb-8">
            Immerse yourself in the world of future technology. Explore our comprehensive resources, connect with fellow tech enthusiasts, and drive innovation in the industry. Join a dynamic community of forward-thinkers.
          </p>
          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="rounded-xl border border-neutral-700 bg-neutral-900 p-5 flex flex-col justify-between min-h-[140px]">
              <div className="flex items-center justify-between mb-2">
                <span className="font-semibold text-base">Resource Access</span>
                <span className="bg-yellow-400 rounded-full p-1">
                  <IconArrowUpRight className="text-black w-5 h-5" />
                </span>
              </div>
              <p className="text-gray-400 text-sm">
                Visitors can access a wide range of resources, including ebooks, whitepapers, reports.
              </p>
            </div>
            <div className="rounded-xl border border-neutral-700 bg-neutral-900 p-5 flex flex-col justify-between min-h-[140px]">
              <div className="flex items-center justify-between mb-2">
                <span className="font-semibold text-base">Community Forum</span>
                <span className="bg-yellow-400 rounded-full p-1">
                  <IconArrowUpRight className="text-black w-5 h-5" />
                </span>
              </div>
              <p className="text-gray-400 text-sm">
                Join our active community forum to discuss industry trends and collaborate with peers.
              </p>
            </div>
            <div className="rounded-xl border border-neutral-700 bg-neutral-900 p-5 flex flex-col justify-between min-h-[140px]">
              <div className="flex items-center justify-between mb-2">
                <span className="font-semibold text-base">Tech Events</span>
                <span className="bg-yellow-400 rounded-full p-1">
                  <IconArrowUpRight className="text-black w-5 h-5" />
                </span>
              </div>
              <p className="text-gray-400 text-sm">
                Stay updated on upcoming tech events, webinars and conferences to enhance your knowledge.
              </p>
            </div>
          </div>
        </div>
      </div>
  );
}