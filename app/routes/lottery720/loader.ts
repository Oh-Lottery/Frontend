import { LoaderFunctionArgs, redirect } from "@remix-run/node";
import {
  getLottery720Detail,
  getLottery720WinnerStore,
} from "entities/lottery720/api/get";
import generateDateArray from "shared/lib/generateDateArray";
import { ROUTE_PATH } from "shared/routes/path";

export const lottery720Loader = async ({ request }: LoaderFunctionArgs) => {
  const url = new URL(request.url);
  const round = url.searchParams.get("round");

  const lottery720RoundsDate = generateDateArray({
    startDate: "2020-05-07",
    interval: 7,
  });

  if (!round) {
    return redirect(
      `${ROUTE_PATH.LOTTERY_720._path}?round=${lottery720RoundsDate.length}`
    );
  }

  const result = await getLottery720Detail({
    round: round ?? lottery720RoundsDate.length.toString(),
  });

  const lotteryWinnerStoreResult = await getLottery720WinnerStore({
    round: round ?? lottery720RoundsDate.length.toString(),
  });

  return {
    round: result.round,
    drawDate: result.drawDate,
    rankWithNum: result.rankWinNum,
    rankClass: result.rankClass,
    rankNo: result.rankNo,
    lotteryRoundDateArray: lottery720RoundsDate,
    lotteryWinnerStoreResult: lotteryWinnerStoreResult,
  };
};
