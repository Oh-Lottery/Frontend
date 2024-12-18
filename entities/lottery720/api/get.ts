import api from "shared/api/api";
import { Lottery720Dto } from "../model/get";

export const getLottery720Detail = async ({ round }: { round: string }) => {
  return api<Lottery720Dto>({
    url: `/lottery720/round/${round}`,
    method: "GET",
  });
};
