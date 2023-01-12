/*
  Warnings:

  - The `gearbox` column on the `Car` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - A unique constraint covering the columns `[name]` on the table `carBrand` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[name]` on the table `carCategory` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[name]` on the table `carModel` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Car" ADD COLUMN     "nickname" TEXT,
DROP COLUMN "gearbox",
ADD COLUMN     "gearbox" "GearBox" NOT NULL DEFAULT 'AUTOMATIC',
ALTER COLUMN "engine" SET DEFAULT 'ELECTRIC';

-- AlterTable
ALTER TABLE "User" ALTER COLUMN "firstname" DROP NOT NULL,
ALTER COLUMN "lastname" DROP NOT NULL,
ALTER COLUMN "birthday" DROP NOT NULL,
ALTER COLUMN "address" DROP NOT NULL,
ALTER COLUMN "phoneNumber" DROP NOT NULL,
ALTER COLUMN "drivingLicenseId" DROP NOT NULL,
ALTER COLUMN "dateOfIssueDrivingLicense" DROP NOT NULL,
ALTER COLUMN "placeOfIssueDrivingLicense" DROP NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "carBrand_name_key" ON "carBrand"("name");

-- CreateIndex
CREATE UNIQUE INDEX "carCategory_name_key" ON "carCategory"("name");

-- CreateIndex
CREATE UNIQUE INDEX "carModel_name_key" ON "carModel"("name");
