-- CreateTable
CREATE TABLE "StarredVisualization" (
    "id" TEXT NOT NULL,
    "visualName" TEXT NOT NULL,
    "pageLink" TEXT NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "StarredVisualization_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "StarredVisualization_visualName_key" ON "StarredVisualization"("visualName");

-- CreateIndex
CREATE UNIQUE INDEX "StarredVisualization_userId_key" ON "StarredVisualization"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "StarredVisualization_visualName_userId_key" ON "StarredVisualization"("visualName", "userId");

-- AddForeignKey
ALTER TABLE "StarredVisualization" ADD CONSTRAINT "StarredVisualization_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;
