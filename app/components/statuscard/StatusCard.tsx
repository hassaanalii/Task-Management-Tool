import { StatusCardProps } from "@/app/types/types";

const StatusCard: React.FC<StatusCardProps> = ({ title, count, color }) => {
  return (
    <div className={`flex flex-col items-center justify-center p-4 w-[100%] rounded-md shadow-md ${color}`}>
      <p className="text-white text-[20px] font-bold">{title}</p>
      <p className="text-white text-[40px] font-bold">{count}</p>
    </div>
  );
};

export default StatusCard;
