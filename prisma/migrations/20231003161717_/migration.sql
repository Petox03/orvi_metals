/*
  Warnings:

  - You are about to drop the column `role` on the `rol` table. All the data in the column will be lost.
  - Added the required column `rol` to the `Rol` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `rol` DROP COLUMN `role`,
    ADD COLUMN `rol` VARCHAR(191) NOT NULL;
