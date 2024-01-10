-- CreateTable
CREATE TABLE "Reviews" (
    "id" TEXT NOT NULL,
    "review" TEXT NOT NULL,
    "visualName" TEXT NOT NULL,
    "pageLink" TEXT NOT NULL,
    "writerId" TEXT NOT NULL,

    CONSTRAINT "Reviews_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Reviews" ADD CONSTRAINT "Reviews_writerId_fkey" FOREIGN KEY ("writerId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;
