/*
  Warnings:

  - Added the required column `stars` to the `Reviews` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Reviews" ADD COLUMN     "stars" INTEGER NOT NULL;
