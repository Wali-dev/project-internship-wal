-- CreateTable
CREATE TABLE `Project` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `clientId` INTEGER NOT NULL,
    `jobId` INTEGER NOT NULL,
    `name` VARCHAR(255) NOT NULL,
    `description` VARCHAR(191) NULL,
    `status` ENUM('ACTIVE', 'COMPLETED') NOT NULL DEFAULT 'ACTIVE',
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `hiredFreelancers` JSON NOT NULL,

    UNIQUE INDEX `Project_jobId_key`(`jobId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Task` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `task` VARCHAR(191) NOT NULL,
    `subTask` VARCHAR(191) NULL,
    `description` VARCHAR(191) NULL,
    `status` ENUM('TODO', 'INPROGRESS', 'COMPLETED') NOT NULL DEFAULT 'TODO',
    `freelancers` JSON NOT NULL,
    `date` VARCHAR(191) NULL,
    `time` VARCHAR(191) NULL,
    `projectId` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Groups` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `groupName` VARCHAR(191) NOT NULL,
    `projectName` VARCHAR(191) NOT NULL,
    `clientId` VARCHAR(191) NOT NULL,
    `freelancers` JSON NOT NULL,
    `projectId` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Holiday` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `clientId` VARCHAR(191) NOT NULL,
    `holidayName` VARCHAR(191) NOT NULL,
    `startDate` VARCHAR(191) NOT NULL,
    `endDate` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Timesheet` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `freelancerId` VARCHAR(191) NOT NULL,
    `project` JSON NOT NULL,
    `activity` JSON NOT NULL,
    `date` VARCHAR(191) NULL,
    `startTime` VARCHAR(191) NULL,
    `endTime` VARCHAR(191) NULL,
    `duration` DOUBLE NULL,
    `note` VARCHAR(191) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
