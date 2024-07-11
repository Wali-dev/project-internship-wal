/*
  Warnings:

  - You are about to drop the column `managers` on the `Groups` table. All the data in the column will be lost.
  - You are about to drop the column `members` on the `Groups` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `Groups` table. All the data in the column will be lost.
  - Added the required column `groupName` to the `Groups` table without a default value. This is not possible if the table is not empty.
  - Added the required column `projectName` to the `Groups` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Groups` DROP COLUMN `managers`,
    DROP COLUMN `members`,
    DROP COLUMN `name`,
    ADD COLUMN `freelancers` JSON NOT NULL,
    ADD COLUMN `groupName` VARCHAR(191) NOT NULL,
    ADD COLUMN `projectName` VARCHAR(191) NOT NULL;

-- CreateTable
CREATE TABLE `Holiday` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `regionId` INTEGER NOT NULL,
    `clientId` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `startDate` DATETIME(3) NOT NULL,
    `endDate` DATETIME(3) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
