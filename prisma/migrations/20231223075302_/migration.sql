/*
  Warnings:

  - A unique constraint covering the columns `[num]` on the table `Payout` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Payout_num_key" ON "Payout"("num");
