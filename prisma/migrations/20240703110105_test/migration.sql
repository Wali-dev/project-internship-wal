/*
  Warnings:

  - You are about to drop the column `managers` on the `Groups` table. All the data in the column will be lost.
  - You are about to drop the column `members` on the `Groups` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `Groups` DROP COLUMN `managers`,
    DROP COLUMN `members`;
