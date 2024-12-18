import { cn } from "@nextui-org/react";
import { useLoaderData, useSearchParams } from "@remix-run/react";
import { lottery645Loader } from "./loader";
import Lottery645ResultCard from "entities/lottery645/ui/Lottery645ResultCard";
import LotteryWinnerStoreCard from "entities/lottery/ui/LotteryWinnerStoreCard";

export const loader = lottery645Loader;

const Lottery645Page = () => {
  const {
    drawDate,
    drawnNumber,
    bonusNumber,
    lotteryInfo,
    lotteryWinnerStore,
  } = useLoaderData<typeof lottery645Loader>();
  const [params, setParams] = useSearchParams();

  return (
    <div className={cn("h-full flex gap-10 justify-center")}>
      <Lottery645ResultCard
        drawDate={drawDate}
        lotteryNumbers={{
          numbers: drawnNumber,
          bonusNumber,
        }}
        lotteryInfo={lotteryInfo}
        round={params.get("round")!}
        onRoundChange={(round) => {
          setParams({ round });
        }}
      />
      <LotteryWinnerStoreCard stores={lotteryWinnerStore} />
    </div>
  );
};

export default Lottery645Page;
