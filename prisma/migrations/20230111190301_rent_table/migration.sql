/*
  Warnings:

  - Added the required column `userId` to the `Rent` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Car" ALTER COLUMN "registrationCertificate" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "Rent" ADD COLUMN     "userId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "User" ALTER COLUMN "drivingLicenseId" SET DATA TYPE TEXT;

-- AddForeignKey
ALTER TABLE "Rent" ADD CONSTRAINT "Rent_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
