/*
  Warnings:

  - A unique constraint covering the columns `[jobId]` on the table `Project` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `Project_jobId_key` ON `Project`(`jobId`);
