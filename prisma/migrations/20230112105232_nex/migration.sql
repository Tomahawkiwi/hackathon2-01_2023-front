/*
  Warnings:

  - You are about to drop the column `carId` on the `Rent` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[name]` on the table `carBrand` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[name]` on the table `carCategory` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[name]` on the table `carModel` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `nickname` to the `Car` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `gearbox` on the `Car` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- DropForeignKey
ALTER TABLE "Rent" DROP CONSTRAINT "Rent_carId_fkey";

-- AlterTable
ALTER TABLE "Car" ADD COLUMN     "nickname" TEXT NOT NULL,
DROP COLUMN "gearbox",
ADD COLUMN     "gearbox" "GearBox" NOT NULL,
ALTER COLUMN "latitude" SET DATA TYPE DOUBLE PRECISION,
ALTER COLUMN "longitude" SET DATA TYPE DOUBLE PRECISION;

-- AlterTable
ALTER TABLE "Rent" DROP COLUMN "carId";

-- CreateIndex
CREATE UNIQUE INDEX "carBrand_name_key" ON "carBrand"("name");

-- CreateIndex
CREATE UNIQUE INDEX "carCategory_name_key" ON "carCategory"("name");

-- CreateIndex
CREATE UNIQUE INDEX "carModel_name_key" ON "carModel"("name");
