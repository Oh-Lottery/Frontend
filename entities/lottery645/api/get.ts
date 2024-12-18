import api from "shared/api/api";
import { Lottery645Dto } from "../model/get";

export const getLottery645Detail = async ({ round }: { round: string }) => {
  return api<Lottery645Dto>({
    url: `/lottery645/round/${round}`,
    method: "GET",
  });
};
