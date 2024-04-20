/*
  Warnings:

  - A unique constraint covering the columns `[clientId,name]` on the table `Project` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `jobId` to the `Project` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Project` ADD COLUMN `jobId` INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `Project_clientId_name_key` ON `Project`(`clientId`, `name`);
