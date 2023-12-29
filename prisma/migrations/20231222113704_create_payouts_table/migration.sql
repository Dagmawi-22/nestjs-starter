-- CreateTable
CREATE TABLE "Payout" (
    "id" SERIAL NOT NULL,
    "number" INTEGER NOT NULL,
    "payout" JSONB NOT NULL,

    CONSTRAINT "Payout_pkey" PRIMARY KEY ("id")
);
