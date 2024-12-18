export interface Lottery720Dto {
  round: number; // 회차를 나타내며, 숫자입니다.
  drawDate: string; // 추첨 날짜를 나타내며, 문자열입니다.
  rankWinNum: number; // 당첨 번호의 순위를 나타내며, 숫자입니다.
  rankClass: number; // 등급을 나타내며, 숫자입니다.
  rankNo: number; // 등수를 나타내며, 숫자입니다.
}

export interface Lottery720WinnerStoreDto {
  storeName: string;
  storeAddress: string;
  storeId: number;
}
