"use client";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";

const Explore = () => {
  const [tutorialData, setTutorialData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchTutorials = async () => {
      try {
        const res = await fetch("/api/tutorials");
        if (!res.ok) throw new Error("Failed to fetch tutorials");
        const data = await res.json();

        setTutorialData(Array.isArray(data.tutorials) ? data.tutorials.splice(0,8) : []);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchTutorials();
  }, []);

  if (loading)
    return (
      <div className="w-full px-4 py-5 lg:px-8 lg:py-10">
        <h2 className="text-4xl font-bold tracking-wide mb-6 text-gray-900 dark:text-white">
          Explore More
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Array.from({ length: 6 }).map((_, idx) => (
            <div
              key={idx}
              className="flex flex-col gap-4 p-6 bg-white dark:bg-[#181b20] rounded-2xl border border-gray-200 dark:border-gray-800 shadow-md"
            >
              <div className="flex items-center justify-between mb-2">
                <Skeleton className="h-8 w-32 rounded" />
                <div className="flex flex-col gap-1 text-right">
                  <Skeleton className="h-4 w-24 mb-1 rounded" />
                  <Skeleton className="h-4 w-24 mb-1 rounded" />
                  <Skeleton className="h-4 w-32 rounded" />
                </div>
              </div>
              <hr className="border-gray-200 dark:border-gray-700" />
              <Skeleton className="h-4 w-full rounded mb-2" />
              <Skeleton className="h-4 w-3/4 rounded mb-2" />
              <Skeleton className="h-6 w-24 ml-2 rounded mb-2" />
              <ul className="space-y-2 ml-4">
                {Array.from({ length: 3 }).map((_, i) => (
                  <li key={i}>
                    <Skeleton className="h-4 w-32 rounded" />
                  </li>
                ))}
              </ul>
              <hr className="border-gray-200 dark:border-gray-700 my-2" />
              <div className="flex items-center flex-col md:flex-row gap-4 justify-between mt-2">
                <Skeleton className="h-10 w-32 rounded-lg" />
                <Skeleton className="h-10 w-36 rounded-lg" />
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  if (error)
    return (
      <section className="w-full px-4 py-8 lg:px-16 lg:py-14 bg-gradient-to-b from-gray-50 via-white to-gray-100 dark:from-[#181b20] dark:via-[#181b20] dark:to-[#23272f] transition-colors">
        <div className="max-w-2xl mx-auto flex flex-col items-center justify-center min-h-[300px]">
          <h2 className="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white mb-4 drop-shadow-sm">
            <span className="bg-gradient-to-r from-red-600 via-orange-500 to-yellow-500 bg-clip-text text-transparent">Error Loading Tutorials</span>
          </h2>
          <p className="text-lg text-red-600 dark:text-red-400 font-semibold mb-2 text-center">{error}</p>
          <p className="text-base text-gray-600 dark:text-gray-300 text-center">Please try refreshing the page or check your network connection.</p>
        </div>
      </section>
    );

  return (
    <section className="w-full px-4 py-8 lg:px-16 lg:py-14 bg-gradient-to-b from-gray-50 via-white to-gray-100 dark:from-[#181b20] dark:via-[#181b20] dark:to-[#23272f] transition-colors">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 gap-4">
          <h2 className="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white drop-shadow-sm">
            <span className="bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-500 bg-clip-text text-transparent">Explore More</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl">
            Discover tutorials, tools, and resources to boost your learning and development journey. Curated by experts, designed for you.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {tutorialData.map((data, idx) => (
            <div
              key={idx}
              className="flex flex-col gap-4 p-7 bg-white/90 dark:bg-[#1a1d23] rounded-2xl border border-gray-200 dark:border-gray-800 shadow-lg hover:shadow-xl transition-shadow duration-300 group relative overflow-hidden"
            >
              <div className="flex items-center justify-between mb-2">
                <p className="text-2xl font-extrabold tracking-tighter text-gray-800 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {data.name}
                </p>
                <div className="flex flex-col gap-1 text-right">
                  {data.designBy && (
                    <p className="text-xs font-medium text-gray-500 dark:text-gray-400 italic">
                      Design By: <span className="not-italic font-semibold">{data.designBy}</span>
                    </p>
                  )}
                  {data.developer && (
                    <p className="text-xs font-medium text-gray-500 dark:text-gray-400 italic">
                      Developer: <span className="not-italic font-semibold">{data.developer}</span>
                    </p>
                  )}
                  {data.createdAt && data.createdAt !== "-" && (
                    <p className="text-xs font-medium text-gray-500 dark:text-gray-400">
                      <span className="font-semibold">First Appearance:</span> {data.createdAt}
                    </p>
                  )}
                </div>
              </div>
              <hr className="border-gray-200 dark:border-gray-700" />
              <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed line-clamp-3">
                {data.description}
              </p>
              <p className="ml-2 text-lg font-bold text-gray-900 dark:text-white mt-2">
                Used For:
              </p>
              <ul className="space-y-2 ml-4">
                {data.usedFor.map((uses, i) => (
                  <li
                    key={i}
                    className="bg-gradient-to-r from-blue-50 via-white to-purple-50 dark:from-[#23272f] dark:via-[#23272f] dark:to-[#23272f] p-2 rounded-lg text-gray-800 dark:text-gray-200 transition-colors border border-gray-100 dark:border-gray-700 shadow-sm"
                  >
                    {uses}
                  </li>
                ))}
              </ul>
              <hr className="border-gray-200 dark:border-gray-700 my-2" />
              <div className="flex items-center flex-col md:flex-row gap-4 justify-between mt-2">
                <Button className="cursor-pointer font-semibold px-6 py-2 rounded-lg shadow-sm bg-gradient-to-r from-blue-600 to-purple-500 text-white hover:from-blue-700 hover:to-purple-600 dark:hover:from-blue-500 dark:hover:to-purple-400 dark:hover:text-gray-900 transition-colors">
                  Learn {data.name}
                </Button>
                <Button
                  variant="outline"
                  className="cursor-pointer font-semibold px-6 py-2 rounded-lg border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                >
                  View References
                </Button>
              </div>
              <span className="absolute right-0 top-0 w-24 h-24 bg-gradient-to-br from-blue-100/40 to-purple-200/20 dark:from-blue-900/10 dark:to-purple-900/10 rounded-bl-3xl pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Explore;
