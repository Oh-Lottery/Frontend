export interface Lottery645Dto {
  round: number; // 회차
  drawDate: string; // 추첨 날짜
  drawNo1: number; // 첫 번째 당첨 번호
  drawNo2: number; // 두 번째 당첨 번호
  drawNo3: number; // 세 번째 당첨 번호
  drawNo4: number; // 네 번째 당첨 번호
  drawNo5: number; // 다섯 번째 당첨 번호
  drawNo6: number; // 여섯 번째 당첨 번호
  bonusNo: number; // 보너스 번호
  firstAccumulateAmount: number; // 1등 누적 금액
  firstPrizeWinnerCount: number; // 1등 당첨자 수
  firstWinAmount: number; // 1등 당첨 금액
  totalSellAmount: number; // 총 판매액
}

export interface Lottery720Dto {
  round: number; // 회차를 나타내며, 숫자입니다.
  drawDate: string; // 추첨 날짜를 나타내며, 문자열입니다.
  rankWinNum: number; // 당첨 번호의 순위를 나타내며, 숫자입니다.
  rankClass: number; // 등급을 나타내며, 숫자입니다.
  rankNo: number; // 등수를 나타내며, 숫자입니다.
}
