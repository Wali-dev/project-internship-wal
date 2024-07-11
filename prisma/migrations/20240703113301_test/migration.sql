-- AlterTable
ALTER TABLE `Groups` ADD COLUMN `managers` JSON NOT NULL,
    ADD COLUMN `members` JSON NOT NULL;
