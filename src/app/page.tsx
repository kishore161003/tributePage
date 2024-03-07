import Image from "next/image";
import HeroCard from "../app/components/HeroCard";
import MainContent from "../app/components/MainContent";
import DisplayDetails from "../app/components/DisplayDetails";

export default function Home() {
  return (
    <div className=" max-lg:h-full z-10 h-screen bg-slate-900 ">
      <div className="h-[500px] rounded-full absolute top-[29%] left-[-4%] z-10 blur-3xl w-[500px] bg-gradient-to-r from-purple-800 to-blue-900 max-lg:hidden"></div>
      <div className="h-[600px] rounded-full absolute  top-[-15%] z-10 right-[91%] blur-3xl w-[600px] bg-gradient-to-r from-purple-800 to-blue-900 max-lg:hidden"></div>
      <div className="flex flex-row max-lg:flex-col max-lg:overflow-y-scroll">
        <HeroCard />
        <div className="flex flex-col -mt-5 h-screen">
          <div className="overflow-y-scroll">
            {" "}
            <MainContent />
            <DisplayDetails />
          </div>
        </div>
      </div>
    </div>
  );
}
