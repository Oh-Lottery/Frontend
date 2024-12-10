import dayjs from "dayjs";

interface generateDateArrayProps {
  startDate: string;
  interval: number;
}

const generateDateArray = ({ startDate, interval }: generateDateArrayProps) => {
  // 시작 날짜를 dayjs 객체로 변환
  const start = dayjs(startDate);
  const today = dayjs();

  // 시작 날짜부터 오늘까지의 총 일수 계산
  const totalDays = today.diff(start, "day");

  // 일정 간격으로 배열 생성
  const daysArray = Array.from(
    { length: Math.floor(totalDays / interval) + 1 }, // 배열의 길이 계산
    (_, index) => start.add(index * interval, "day").format("YYYY-MM-DD") // 각 인덱스에 해당하는 날짜 계산
  );

  return daysArray;
};

export default generateDateArray;
