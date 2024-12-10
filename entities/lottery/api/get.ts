import api from "shared/api/api";
import { Lottery720Dto } from "../model/get";

export const getLottery645Detail = async ({ round }: { round: string }) => {
  return api<Lottery720Dto>({
    url: `/lottery645/round/${round}`,
    method: "GET",
  });
};
