-- AlterTable
ALTER TABLE `order` MODIFY `creationDate` DATE NOT NULL,
    MODIFY `deadline` DATE NOT NULL;

-- AlterTable
ALTER TABLE `product` MODIFY `dateOfArrival` DATE NOT NULL;
