-- DropForeignKey
ALTER TABLE `order` DROP FOREIGN KEY `Order_statusId_fkey`;

-- DropForeignKey
ALTER TABLE `product` DROP FOREIGN KEY `Product_categoryId_fkey`;

-- DropForeignKey
ALTER TABLE `product` DROP FOREIGN KEY `Product_storageTypeId_fkey`;
