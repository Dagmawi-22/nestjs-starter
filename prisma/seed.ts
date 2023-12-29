

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // create an initial style
  // const post = await prisma.style.upsert({
  //     create: {
  //         id: 1,
  //         logo: "test",
  //         backgroundColor: "gray",
  //         kenoTextColor: "#fff",
  //         timerColor: "#fff",
  //         drawTextColor: "#fff",
  //         gameIdTextColor: "#fff",
  //         bannerBackgroundColor: "#fff",
  //         bannerTextColor: "#fff",
  //         selectedHICell: "#fff",
  //         unselectedCell: "#fff",
  //         selectedLowCell: "#fff",
  //         jackpotTextColor: "#fff",
  //         headSelectedColor: "#fff",
  //         headUnselectedColor: "#fff",
  //         evenColor: "#fff",
  //         counterColor: ["#fff", "#ggg"],
  //         payoutTitleColor: "#fff",
  //         hitAndWinColor: "#fff"
  //     },
  //     where: undefined,
  //     update: undefined
  // });

  const cont = await prisma.content.upsert({
    // create an initial content
    create: {
      kenoText: "String",
      drawText: "String",
      bannerText: "String",
      hitAndWinText: ["String"],
      payoutTitle: ["String"],  
      jackpotText: 23
    },
    where: undefined,
    update: undefined
});

// const comm = await prisma.common.upsert({
//   // create an initial common
//   create: {
//     payoutTbl: {},
//     maxBetAmount: 12,
//     minBetAmount: 23,
//     minDepositAmount: 10000,
//     maxDepositAmount: 25,
//     maxWithdrawAmount: 1000000,
//     minWithdrawAmount: 24,
//     defaultDailyID: 45,
//     time: 34
//   },
//   where: undefined,
//   update: undefined
// });


  console.log("data seeded!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
