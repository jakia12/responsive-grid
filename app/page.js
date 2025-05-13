export default function Home() {
  return (
    <div>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 grid-rows-4 md:grid-row-3  lg:grid-row-3  gap-4 p-[200px]">
        <div className="bg-blue-700 rounded-lg   lg:col-span-2 lg:row-span-2 md:col-span-2 md:row-span-2  h-40 lg:h-auto md:h-auto"></div>
        <div className="bg-red-400 rounded-lg  lg:h-40 md:h-40 lg:col-span-1  lg:row-span-1 col-span-1  row-span-2 md:col-span-1  md:row-span-1"></div>
        <div className="bg-green-400 rounded-lg lg:h-40 md:h-40 lg:col-span-1  lg:row-span-1 col-span-1  row-span-2 md:col-span-1  md:row-span-1 "></div>
        <div className="bg-yellow-400 rounded-lg  lg:h-40 md:h-40 lg:col-span-1  lg:row-span-1 col-span-1  row-span-2 md:col-span-1  md:row-span-1 "></div>
        <div className="bg-purple-400 rounded-lg  h-40 md:col-span-2 lg:col-span-1 "></div>
      </div>
    </div>
  );
}
