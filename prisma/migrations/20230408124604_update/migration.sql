-- CreateTable
CREATE TABLE "Prizes" (
    "id" TEXT NOT NULL,
    "amout" TEXT NOT NULL,

    CONSTRAINT "Prizes_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Prizes_amout_key" ON "Prizes"("amout");
