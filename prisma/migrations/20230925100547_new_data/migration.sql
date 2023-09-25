/*
  Warnings:

  - Added the required column `Price` to the `Order` table without a default value. This is not possible if the table is not empty.
  - Added the required column `creationDate` to the `Order` table without a default value. This is not possible if the table is not empty.
  - Added the required column `deadline` to the `Order` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `order` ADD COLUMN `Price` DECIMAL(65, 30) NOT NULL,
    ADD COLUMN `creationDate` DATETIME(3) NOT NULL,
    ADD COLUMN `deadline` DATETIME(3) NOT NULL;
