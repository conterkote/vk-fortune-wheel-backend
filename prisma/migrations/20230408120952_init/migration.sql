/*
  Warnings:

  - You are about to drop the `Machine` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Machine";

-- DropTable
DROP TABLE "User";

-- CreateTable
CREATE TABLE "Wheel" (
    "id" INTEGER NOT NULL DEFAULT 1,
    "balance" INTEGER NOT NULL DEFAULT 1000,
    "jackpot" INTEGER NOT NULL DEFAULT 10000,

    CONSTRAINT "Wheel_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Winners" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "amout" TEXT NOT NULL,

    CONSTRAINT "Winners_pkey" PRIMARY KEY ("id")
);
