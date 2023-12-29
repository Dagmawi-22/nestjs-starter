/*
  Warnings:

  - The `payout` column on the `Payout` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "Payout" DROP COLUMN "payout",
ADD COLUMN     "payout" JSONB[];
