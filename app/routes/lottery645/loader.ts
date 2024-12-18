import { LoaderFunctionArgs, redirect } from "@remix-run/node";
import {
  getLottery645Detail,
  getLottery645WinnerStore,
} from "entities/lottery645/api/get";
import { LOTTERY_645_ROUNDS_DATE } from "entities/lottery645/constants/constants";
import { ROUTE_PATH } from "shared/routes/path";

export const lottery645Loader = async ({ request }: LoaderFunctionArgs) => {
  const url = new URL(request.url);
  const round = url.searchParams.get("round");

  const lottery645RoundsDate = LOTTERY_645_ROUNDS_DATE;

  if (!round) {
    return redirect(
      `${ROUTE_PATH.LOTTERY_645._path}?round=${lottery645RoundsDate.length}`
    );
  }

  const lotteryDetailResult = await getLottery645Detail({
    round: round ?? lottery645RoundsDate.length.toString(),
  });

  const lotteryWinnerStoreResult = await getLottery645WinnerStore({
    round: round ?? lottery645RoundsDate.length.toString(),
  });

  return {
    round: Number(lotteryDetailResult.round),
    drawDate: lotteryDetailResult.drawDate,
    drawnNumber: [
      lotteryDetailResult.drawNo1,
      lotteryDetailResult.drawNo2,
      lotteryDetailResult.drawNo3,
      lotteryDetailResult.drawNo4,
      lotteryDetailResult.drawNo5,
      lotteryDetailResult.drawNo6,
    ],
    bonusNumber: lotteryDetailResult.bonusNo,
    lotteryInfo: {
      firstAccumulateAmount: lotteryDetailResult.firstAccumulateAmount,
      firstPrizeWinnerCount: lotteryDetailResult.firstPrizeWinnerCount,
      firstWinAmount: lotteryDetailResult.firstWinAmount,
      totalSellAmount: lotteryDetailResult.totalSellAmount,
    },
    lotteryRoundDateArray: lottery645RoundsDate,
    lotteryWinnerStore: lotteryWinnerStoreResult,
  };
};
