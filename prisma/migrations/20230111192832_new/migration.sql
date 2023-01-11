/*
  Warnings:

  - You are about to drop the column `brand` on the `Car` table. All the data in the column will be lost.
  - You are about to drop the column `category` on the `Car` table. All the data in the column will be lost.
  - You are about to drop the column `model` on the `Car` table. All the data in the column will be lost.
  - Added the required column `carBrandId` to the `Car` table without a default value. This is not possible if the table is not empty.
  - Added the required column `carModelId` to the `Car` table without a default value. This is not possible if the table is not empty.
  - Added the required column `categoryId` to the `Car` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `engine` on the `Car` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "CarEngine" AS ENUM ('GASOLINE', 'DIESEL', 'HYBRID', 'ELECTRIC');

-- CreateEnum
CREATE TYPE "GearBox" AS ENUM ('MANUAL', 'AUTOMATIC');

-- AlterTable
ALTER TABLE "Car" DROP COLUMN "brand",
DROP COLUMN "category",
DROP COLUMN "model",
ADD COLUMN     "carBrandId" TEXT NOT NULL,
ADD COLUMN     "carModelId" TEXT NOT NULL,
ADD COLUMN     "categoryId" TEXT NOT NULL,
DROP COLUMN "engine",
ADD COLUMN     "engine" "CarEngine" NOT NULL;

-- CreateTable
CREATE TABLE "carCategory" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "carBrand" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "carModel" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "carCategory_id_key" ON "carCategory"("id");

-- CreateIndex
CREATE UNIQUE INDEX "carBrand_id_key" ON "carBrand"("id");

-- CreateIndex
CREATE UNIQUE INDEX "carModel_id_key" ON "carModel"("id");

-- AddForeignKey
ALTER TABLE "Car" ADD CONSTRAINT "Car_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "carCategory"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Car" ADD CONSTRAINT "Car_carBrandId_fkey" FOREIGN KEY ("carBrandId") REFERENCES "carBrand"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Car" ADD CONSTRAINT "Car_carModelId_fkey" FOREIGN KEY ("carModelId") REFERENCES "carModel"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
