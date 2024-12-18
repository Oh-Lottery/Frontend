import { Card, CardBody, CardHeader } from "@nextui-org/card";
import {
  Autocomplete,
  AutocompleteItem,
  Chip,
  cn,
  Divider,
} from "@nextui-org/react";
import { useLoaderData, useSearchParams } from "@remix-run/react";
import { lottery720Loader } from "./loader";
import Lottery720Ball from "entities/lottery720/ui/Lottery720Ball";
import LotteryWinnerStoreCard from "entities/lottery/ui/LotteryWinnerStoreCard";

export const loader = lottery720Loader;

const Lottery720Page = () => {
  const {
    drawDate,
    rankNo,
    rankClass,
    lotteryRoundDateArray,
    lotteryWinnerStoreResult,
  } = useLoaderData<typeof lottery720Loader>();

  const [params, setParams] = useSearchParams();

  return (
    <div className={cn("h-full flex gap-10 justify-center")}>
      <Card className="w-[44rem] p-3 ">
        <CardHeader className="flex items-center justify-between gap-3">
          <h2 className={cn("text-2xl flex items-center gap-4")}>
            <Autocomplete
              fullWidth={false}
              className="w-36"
              selectedKey={params.get("round")}
              onSelectionChange={(key) => {
                if (typeof key === "string") {
                  setParams({ round: key });
                }
              }}
              aria-label="로또 회차 선택"
            >
              {lotteryRoundDateArray.map((_, index) => (
                <AutocompleteItem
                  key={(index + 1).toString()}
                  textValue={`${(index + 1).toString()}회`}
                >
                  {(index + 1).toString()}회
                </AutocompleteItem>
              ))}
            </Autocomplete>
            연금 복권 당첨 결과
          </h2>
          <Chip color="default">{drawDate}</Chip>
        </CardHeader>
        <Divider />
        <CardBody>
          <div className={cn("flex gap-3 justify-center mt-4 items-center")}>
            <Lottery720Ball number={rankClass} per={1} />
            <p className={cn("mr-4 text-medium font-bold")}>조</p>
            {rankNo
              .toString()
              .split("")
              .map((num, index) => (
                <Lottery720Ball
                  key={index}
                  number={Number(num)}
                  per={Math.pow(10, 5 - index)}
                />
              ))}
          </div>
          <div className={cn("flex gap-3 justify-center mt-4 items-center")}>
            <p className={cn("mr-4 ml-11 text-medium font-bold")}>각 조</p>
            {rankNo
              .toString()
              .split("")
              .map((num, index) => (
                <Lottery720Ball
                  key={index}
                  number={Number(num)}
                  per={Math.pow(10, 5 - index)}
                />
              ))}
          </div>
        </CardBody>
      </Card>
      <LotteryWinnerStoreCard stores={lotteryWinnerStoreResult} />
    </div>
  );
};

export default Lottery720Page;
