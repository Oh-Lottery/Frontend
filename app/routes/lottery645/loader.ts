import { LoaderFunctionArgs, redirect } from "@remix-run/node";
import { getLottery645Detail } from "entities/lottery/api/get";
import generateDateArray from "shared/lib/generateDateArray";

export const lottery645Loader = async ({ request }: LoaderFunctionArgs) => {
  const url = new URL(request.url);
  const round = url.searchParams.get("round");

  const lottery645RoundsDate = generateDateArray({
    startDate: "2002-12-07",
    interval: 7,
  });

  if (!round) {
    return redirect(`/lottery645?round=${lottery645RoundsDate.length}`);
  }

  const result = await getLottery645Detail({
    round: round ?? lottery645RoundsDate.length.toString(),
  });

  return {
    round: Number(result.round),
    drawDate: result.drawDate,
    drawnNumber: [
      result.drawNo1,
      result.drawNo2,
      result.drawNo3,
      result.drawNo4,
      result.drawNo5,
      result.drawNo6,
    ],
    bonusNumber: result.bonusNo,
    lotteryInfo: {
      firstAccumulateAmount: result.firstAccumulateAmount,
      firstPrizeWinnerCount: result.firstPrizeWinnerCount,
      firstWinAmount: result.firstWinAmount,
      totalSellAmount: result.totalSellAmount,
    },
    lotteryRoundDateArray: lottery645RoundsDate,
  };
};
