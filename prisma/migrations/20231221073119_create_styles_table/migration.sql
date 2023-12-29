-- CreateTable
CREATE TABLE "Style" (
    "id" SERIAL NOT NULL,
    "logo" TEXT NOT NULL,
    "backgroundColor" TEXT NOT NULL,
    "kenoTextColor" TEXT NOT NULL,
    "timerColor" TEXT NOT NULL,
    "drawTextColor" TEXT NOT NULL,
    "gameIdTextColor" TEXT NOT NULL,
    "bannerBackgroundColor" TEXT NOT NULL,
    "bannerTextColor" TEXT NOT NULL,
    "selectedHICell" TEXT NOT NULL,
    "unselectedCell" TEXT NOT NULL,
    "selectedLowCell" TEXT NOT NULL,
    "jackpotTextColor" TEXT NOT NULL,
    "headSelectedColor" TEXT NOT NULL,
    "headUnselectedColor" TEXT NOT NULL,
    "evenColor" TEXT NOT NULL,
    "counterColor" TEXT[],
    "payoutTitleColor" TEXT NOT NULL,
    "hitAndWinColor" TEXT NOT NULL,

    CONSTRAINT "Style_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Content" (
    "id" SERIAL NOT NULL,
    "kenoText" TEXT NOT NULL,
    "drawText" TEXT NOT NULL,
    "bannerText" TEXT NOT NULL,
    "hitAndWinText" TEXT[],
    "payoutTitle" TEXT[],
    "jackpotText" INTEGER NOT NULL,

    CONSTRAINT "Content_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Common" (
    "id" SERIAL NOT NULL,
    "payoutTbl" JSONB NOT NULL,
    "maxBetAmount" INTEGER NOT NULL,
    "minBetAmount" INTEGER NOT NULL,
    "minDepositAmount" INTEGER NOT NULL,
    "maxDepositAmount" INTEGER NOT NULL,
    "maxWithdrawAmount" INTEGER NOT NULL,
    "minWithdrawAmount" INTEGER NOT NULL,
    "defaultDailyID" INTEGER NOT NULL,
    "time" INTEGER NOT NULL,

    CONSTRAINT "Common_pkey" PRIMARY KEY ("id")
);
