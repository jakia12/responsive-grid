"use client";

export default function Home() {
  const galleryData = [
    { id: 1, type: "", bg: "bg-red-400" },
    { id: 2, type: "tall", bg: "bg-blue-400" },
    { id: 3, type: "", bg: "bg-green-400" },
    { id: 4, type: "", bg: "bg-yellow-400" },

    { id: 5, type: "", bg: "bg-pink-400" },
    { id: 6, type: "tall", bg: "bg-indigo-400" },
    { id: 7, type: "", bg: "bg-orange-400" },
    { id: 8, type: "wide", bg: "bg-teal-400" },
    { id: 9, type: "", bg: "bg-rose-400" },
    { id: 10, type: "", bg: "bg-lime-400" },
  ];

  const getSpanClasses = (type) => {
    switch (type) {
      case "wide":
        return "sm:col-span-2 sm:row-span-2";
      case "tall":
        return "sm:row-span-2";
      case "feature":
        return "sm:col-span-2 sm:row-span-3 md:col-span-3 md:row-span-3";
      case "feature-tall":
        return "sm:col-span-2 sm:row-span-3";
      default:
        return "";
    }
  };

  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-2xl font-bold text-center mb-6">Gallery</h1>
      <div className="grid gap-4 grid-cols-1 sm:[grid-template-columns:repeat(auto-fit,minmax(13.5rem,1fr))] md:[grid-template-columns:repeat(auto-fit,minmax(16rem,1fr))] lg:[grid-template-columns:repeat(auto-fit,minmax(22rem,1fr))] auto-rows-[75vw] sm:auto-rows-[9rem] lg:auto-rows-[16.5rem] grid-flow-dense">
        {galleryData.map((item, i) => (
          <div
            key={item.id}
            className={`relative ${
              item.bg
            } text-white text-xl font-bold flex items-center justify-center ${getSpanClasses(
              item.type
            )}`}
          >
            <span className="bg-black/50 w-12 h-12 flex items-center justify-center rounded-full">
              {i + 1}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
