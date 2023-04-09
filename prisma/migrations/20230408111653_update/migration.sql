-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "balance" INTEGER NOT NULL DEFAULT 1000,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Machine" (
    "id" TEXT NOT NULL,
    "jackpot" INTEGER NOT NULL DEFAULT 10000,

    CONSTRAINT "Machine_pkey" PRIMARY KEY ("id")
);
