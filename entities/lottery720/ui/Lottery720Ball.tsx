import { cn } from "@nextui-org/react";

interface LotteryBallProps {
  number: number;
  per: number;
}

const Lottery720Ball = ({ number, per }: LotteryBallProps) => {
  const getBallColor = () => {
    if (per >= 100000) return "bg-red-400";
    if (per >= 10000) return "bg-orange-400";
    if (per >= 1000) return "bg-yellow-400";
    if (per >= 100) return "bg-sky-400";
    if (per >= 10) return "bg-purple-400";
    return "bg-gray-500";
  };

  return (
    <div
      className={cn(
        `w-12 h-12 flex items-center justify-center rounded-full text-white font-bold `,
        getBallColor()
      )}
    >
      {number}
    </div>
  );
};

export default Lottery720Ball;
