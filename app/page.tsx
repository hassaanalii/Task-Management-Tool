import Image from "next/image";
import StatusInformation from "./components/statusinformation/StatusInformation";

export default function Home() {
  return (
    <div className="lg:w-[71%] w-[85%] mx-auto my-10 flex items-center md:px-16 px-8  py-10 rounded-md bg-customGray/30">
        <StatusInformation />
    </div>
  );
}
