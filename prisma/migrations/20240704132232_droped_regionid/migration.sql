/*
  Warnings:

  - You are about to drop the column `createdAt` on the `Holiday` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `Holiday` table. All the data in the column will be lost.
  - You are about to drop the column `regionId` on the `Holiday` table. All the data in the column will be lost.
  - Added the required column `holidayName` to the `Holiday` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Holiday` DROP COLUMN `createdAt`,
    DROP COLUMN `name`,
    DROP COLUMN `regionId`,
    ADD COLUMN `holidayName` VARCHAR(191) NOT NULL;
