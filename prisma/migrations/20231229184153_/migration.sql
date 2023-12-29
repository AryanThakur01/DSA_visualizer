/*
  Warnings:

  - The `refresh_token_expires_in` column on the `accounts` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "accounts" DROP COLUMN "refresh_token_expires_in",
ADD COLUMN     "refresh_token_expires_in" INTEGER;
