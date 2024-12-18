import { PlusIcon } from "@heroicons/react/24/outline";
import { Card, CardHeader, CardBody } from "@nextui-org/card";
import {
  cn,
  Autocomplete,
  AutocompleteItem,
  Chip,
  Divider,
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
} from "@nextui-org/react";
import { LOTTERY_645_ROUNDS_DATE } from "entities/lottery645/constants/constants";
import LotteryBall from "entities/lottery645/ui/LotteryBall";
import { PickArrayItem } from "shared/lib/PickArrayItem";

const COLUMNS = [
  {
    key: "firstAccumulateAmount" as const,
    label: "1등 당첨금 누적액",
  },
  {
    key: "firstPrizeWinnerCount" as const,
    label: "1등 당첨자 수",
  },
  {
    key: "firstWinAmount" as const,
    label: "1등 당첨금",
  },
  {
    key: "totalSellAmount" as const,
    label: "총 판매금액",
  },
];

interface Lottery645ResultCardProps {
  lotteryNumbers: {
    numbers: number[];
    bonusNumber: number;
  };
  drawDate: string;
  lotteryInfo: Record<PickArrayItem<typeof COLUMNS>["key"], number>;
  round: string;
  onRoundChange: (round: string) => void;
}

const Lottery645ResultCard = ({
  lotteryNumbers,
  drawDate,
  lotteryInfo,
  round,
  onRoundChange,
}: Lottery645ResultCardProps) => {
  return (
    <Card className="w-[44rem] h-fit p-3">
      <CardHeader className="flex items-center justify-between gap-3">
        <h2 className={cn("text-xl flex items-center gap-4")}>
          <Autocomplete
            fullWidth={false}
            className="w-36"
            selectedKey={round}
            onSelectionChange={(key) => {
              if (typeof key === "string") {
                onRoundChange(key);
              }
            }}
            aria-label="로또 회차 선택"
          >
            {LOTTERY_645_ROUNDS_DATE.map((_, index) => (
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
          {lotteryNumbers.numbers.map((number) => (
            <LotteryBall number={number} key={number} />
          ))}
          <PlusIcon className={cn("w-10")} />
          <LotteryBall number={lotteryNumbers.bonusNumber} />
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
  );
};

export default Lottery645ResultCard;
