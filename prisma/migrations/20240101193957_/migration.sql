/*
  Warnings:

  - The primary key for the `StarredVisualization` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- AlterTable
ALTER TABLE "StarredVisualization" DROP CONSTRAINT "StarredVisualization_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "StarredVisualization_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "StarredVisualization_id_seq";
