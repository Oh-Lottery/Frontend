import api from "shared/api/api";
import { Lottery645Dto, Lottery645WinnerStoreDto } from "../model/get";

export const getLottery645Detail = async ({ round }: { round: string }) => {
  return api<Lottery645Dto>({
    url: `/lottery645/round/${round}`,
    method: "GET",
  });
};

export const getLottery645WinnerStore = async ({
  round,
}: {
  round: string;
}) => {
  return api<Lottery645WinnerStoreDto[]>({
    url: `/lottery645/round/${round}/store`,
    method: "GET",
  });
};
