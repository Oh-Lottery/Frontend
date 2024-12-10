export interface Lottery720Dto {
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
