import api from "shared/api/api";
import { Lottery720Dto, Lottery720WinnerStoreDto } from "../model/get";

export const getLottery720Detail = async ({ round }: { round: string }) => {
  return api<Lottery720Dto>({
    url: `/lottery720/round/${round}`,
    method: "GET",
  });
};

export const getLottery720WinnerStore = async ({
  round,
}: {
  round: string;
}) => {
  return api<Lottery720WinnerStoreDto[]>({
    url: `/lottery720/round/${round}/store`,
    method: "GET",
  });
};
