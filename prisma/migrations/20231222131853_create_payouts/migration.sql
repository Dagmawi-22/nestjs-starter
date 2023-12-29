/*
  Warnings:

  - You are about to drop the column `odd` on the `Payout` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Payout" DROP COLUMN "odd",
ADD COLUMN     "payout" JSONB;
