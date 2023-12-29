import { Injectable } from "@nestjs/common";
import { PrismaService } from "./prisma/prisma.service";


@Injectable()
export class SeederService {
  constructor(private readonly prismaService: PrismaService) {}

  async getNumberOfRows(): Promise<number> {
  const rowCount = await this.prismaService.style.count();
  return rowCount;
}

  async seed() {
    // Your seeding logic here
    if(await this.prismaService.style.count() < 1)
    { await this.prismaService.style.createMany({
      data: [
        {
          logo: "test",
          backgroundColor: "gray",
          kenoTextColor: "#fff",
          timerColor: "#fff",
          drawTextColor: "#fff",
          gameIdTextColor: "#fff",
          bannerBackgroundColor: "#fff",
          bannerTextColor: "#fff",
          selectedHICell: "#fff",
          unselectedCell: "#fff",
          selectedLowCell: "#fff",
          jackpotTextColor: "#fff",
          headSelectedColor: "#fff",
          headUnselectedColor: "#fff",
          evenColor: "#fff",
          counterColor: ["#fff", "#fff"],
          payoutTitleColor: "#fff",
          hitAndWinColor: "#fff",
        },
      ],
    });
  }

   if(await this.prismaService.content.count() < 1){
      await this.prismaService.content.createMany({
      data: [
        {
          kenoText: "String",
          drawText: "String",
          bannerText: "String",
          hitAndWinText: ["String"],
          payoutTitle: ["String"],
          jackpotText: 23,
        },
      ],
    });
   }
  

if(await this.prismaService.payout.count() < 1){

  const data = [
    {
      num : 1,
      payout: [{ num: 1, odd: 3.8 }],
    },
    {
      num : 2,
      payout: [{ num: 2, odd: 15 }],
    },
     {
      num : 3,
      payout: [
       { num: 2, odd: 3 },
       { num: 3, odd: 35 },
     ],
    },
    {
      num: 4,
      payout: [
      { num: 2, odd: 1 },
      { num: 3, odd: 8 },
      { num: 4, odd: 100 },
    ],
    },
     {
      num: 5,
      payout: [
      { num: 2, odd: 1 },
      { num: 3, odd: 3 },
      { num: 4, odd: 15 },
      { num: 5, odd: 300 },
    ],
    },
     {
      num: 6,
      payout: [
      { num: 3, odd: 1 },
      { num: 4, odd: 10 },
      { num: 5, odd: 70 },
      { num: 6, odd: 1800 },
    ],
    },
     {
      num: 7,
      payout:  [
      { num: 3, odd: 1 },
      { num: 4, odd: 6 },
      { num: 5, odd: 12 },
      { num: 6, odd: 120 },
      { num: 7, odd: 2150 },
    ],
    },
     {
      num: 8,
      payout:  [
      { num: 4, odd: 4 },
      { num: 5, odd: 8 },
      { num: 6, odd: 68 },
      { num: 7, odd: 600 },
      { num: 8, odd: 3000 },
    ],
    },
     {
      num: 9,
      payout:  [
      { num: 4, odd: 3 },
      { num: 5, odd: 6 },
      { num: 6, odd: 18 },
      { num: 7, odd: 120 },
      { num: 8, odd: 1800 },
      { num: 9, odd: 4200 },
    ],
    },
     {
      num: 10,
      payout: [
      { num: 4, odd: 2 },
      { num: 5, odd: 4 },
      { num: 6, odd: 12 },
      { num: 7, odd: 40 },
      { num: 8, odd: 400 },
      { num: 9, odd: 2500 },
      { num: 10, odd: 5000 },
    ],
    }
  ];


  await this.prismaService.payout.createMany({
    data: data,
  });
}

if(await this.prismaService.common.count() < 1){
await this.prismaService.common.createMany({
data: [
{
payoutTbl: {},
maxBetAmount: 12,
minBetAmount: 23,
minDepositAmount: 10000,
maxDepositAmount: 25,
maxWithdrawAmount: 1000000,
minWithdrawAmount: 24,
defaultDailyID: 45,
time: 34,
},
],
});
}

}}

