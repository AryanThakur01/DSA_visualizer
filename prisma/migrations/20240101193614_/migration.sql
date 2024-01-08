/*
  Warnings:

  - The primary key for the `StarredVisualization` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `StarredVisualization` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - A unique constraint covering the columns `[visualName,userId]` on the table `StarredVisualization` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "StarredVisualization" DROP CONSTRAINT "StarredVisualization_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "StarredVisualization_pkey" PRIMARY KEY ("id");

-- CreateIndex
CREATE UNIQUE INDEX "StarredVisualization_visualName_userId_key" ON "StarredVisualization"("visualName", "userId");
