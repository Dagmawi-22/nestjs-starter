/*
  Warnings:

  - You are about to drop the column `number` on the `Payout` table. All the data in the column will be lost.
  - You are about to drop the column `payout` on the `Payout` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Payout" DROP COLUMN "number",
DROP COLUMN "payout",
ADD COLUMN     "num" INTEGER,
ADD COLUMN     "odd" JSONB;
