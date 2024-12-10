import { PlusIcon } from "@heroicons/react/16/solid";
import { Card, CardBody, CardHeader } from "@nextui-org/card";
import {
  Autocomplete,
  AutocompleteItem,
  Chip,
  cn,
  Divider,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@nextui-org/react";
import { useLoaderData, useSearchParams } from "@remix-run/react";
import LotteryBall from "entities/lottery/ui/LotteryBall";
import { lottery645Loader } from "./loader";

export const loader = lottery645Loader;

const COLUMNS = [
  {
    key: "firstAccumulateAmount",
    label: "1등 당첨금 누적액",
  },
  {
    key: "firstPrizeWinnerCount",
    label: "1등 당첨자 수",
  },
  {
    key: "firstWinAmount",
    label: "1등 당첨금",
  },
  {
    key: "totalSellAmount",
    label: "총 판매금액",
  },
];

const Lottery645Page = () => {
  const {
    drawDate,
    drawnNumber,
    bonusNumber,
    lotteryInfo,
    lotteryRoundDateArray,
  } = useLoaderData<typeof lottery645Loader>();
  const [params, setParams] = useSearchParams();

  return (
    <div className={cn("h-full flex items-center justify-center")}>
      <Card className="w-[44rem] p-3 m-auto">
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
            6/45 로또 번호 당첨 결과
          </h2>
          <Chip color="default">{drawDate}</Chip>
        </CardHeader>
        <Divider />
        <CardBody>
          <div className={cn("flex gap-3 justify-center mt-4")}>
            {drawnNumber.map((number) => (
              <LotteryBall number={number} key={number} />
            ))}
            <PlusIcon className={cn("w-10")} />
            <LotteryBall number={bonusNumber} />
          </div>
          <div className={cn("mt-6")}>
            <Table>
              <TableHeader columns={COLUMNS}>
                {(column) => (
                  <TableColumn key={column.key}>{column.label}</TableColumn>
                )}
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>
                    {lotteryInfo.firstAccumulateAmount.toLocaleString("ko-KR")}
                  </TableCell>
                  <TableCell>
                    {lotteryInfo.firstPrizeWinnerCount.toLocaleString("ko-KR")}
                  </TableCell>
                  <TableCell>
                    {lotteryInfo.firstWinAmount.toLocaleString("ko-KR")}
                  </TableCell>
                  <TableCell>
                    {lotteryInfo.totalSellAmount.toLocaleString("ko-KR")}
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default Lottery645Page;
