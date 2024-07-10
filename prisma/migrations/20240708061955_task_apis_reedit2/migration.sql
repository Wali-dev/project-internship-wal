/*
  Warnings:

  - You are about to drop the column `createdAt` on the `Task` table. All the data in the column will be lost.
  - You are about to drop the column `title` on the `Task` table. All the data in the column will be lost.
  - You are about to drop the `Holiday` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `task` to the `Task` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `Task` DROP FOREIGN KEY `Task_projectId_fkey`;

-- AlterTable
ALTER TABLE `Task` DROP COLUMN `createdAt`,
    DROP COLUMN `title`,
    ADD COLUMN `date` VARCHAR(191) NULL,
    ADD COLUMN `freelancers` JSON NOT NULL,
    ADD COLUMN `subTask` VARCHAR(191) NULL,
    ADD COLUMN `task` VARCHAR(191) NOT NULL,
    ADD COLUMN `time` VARCHAR(191) NULL,
    MODIFY `projectId` VARCHAR(191) NULL;

-- DropTable
DROP TABLE `Holiday`;
