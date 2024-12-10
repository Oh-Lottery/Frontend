import api from "shared/api/api";
import { Lottery645Dto, Lottery720Dto } from "../model/get";

export const getLottery645Detail = async ({ round }: { round: string }) => {
  return api<Lottery645Dto>({
    url: `/lottery645/round/${round}`,
    method: "GET",
  });
};

export const getLottery720Detail = async ({ round }: { round: string }) => {
  return api<Lottery720Dto>({
    url: `/lottery720/round/${round}`,
    method: "GET",
  });
};
