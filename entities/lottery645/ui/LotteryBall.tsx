import { cn } from "@nextui-org/react";

interface LotteryBallProps {
  number: number;
}

const LotteryBall = ({ number }: LotteryBallProps) => {
  const getBallColor = (num: number) => {
    if (num <= 10) return "bg-yellow-500";
    if (num <= 20) return "bg-blue-500";
    if (num <= 30) return "bg-red-500";
    if (num <= 40) return "bg-gray-500";
    if (num <= 45) return "bg-green-500";
  };

  return (
    <div
      className={cn(
        `w-12 h-12 flex items-center justify-center rounded-full text-white font-bold `,
        getBallColor(number)
      )}
    >
      {number}
    </div>
  );
};

export default LotteryBall;
