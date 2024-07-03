/*
  Warnings:

  - You are about to drop the column `createdAt` on the `Group` table. All the data in the column will be lost.
  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.

*/
-- AlterTable
ALTER TABLE `Group` DROP COLUMN `createdAt`,
    MODIFY `projectId` VARCHAR(191) NOT NULL;

-- DropTable
DROP TABLE `User`;
