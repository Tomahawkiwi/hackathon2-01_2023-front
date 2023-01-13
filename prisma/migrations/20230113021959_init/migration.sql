-- CreateEnum
CREATE TYPE "CarEngine" AS ENUM ('GASOLINE', 'DIESEL', 'HYBRID', 'ELECTRIC');

-- CreateEnum
CREATE TYPE "GearBox" AS ENUM ('MANUAL', 'AUTOMATIC');

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "firstname" TEXT,
    "lastname" TEXT,
    "birthday" TIMESTAMP(3),
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "address" TEXT,
    "zipCode" TEXT,
    "phoneNumber" TEXT,
    "profilPicture" TEXT,
    "drivingLicenseId" TEXT,
    "dateOfIssueDrivingLicense" TIMESTAMP(3),
    "placeOfIssueDrivingLicense" TEXT,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Car" (
    "id" TEXT NOT NULL,
    "nickname" TEXT,
    "categoryId" TEXT NOT NULL,
    "carBrandId" TEXT NOT NULL,
    "carModelId" TEXT NOT NULL,
    "engine" "CarEngine" NOT NULL,
    "gearbox" "GearBox" NOT NULL,
    "odometer" INTEGER NOT NULL,
    "description" TEXT NOT NULL,
    "mileagePackage" INTEGER NOT NULL,
    "address" TEXT NOT NULL,
    "latitude" DOUBLE PRECISION NOT NULL,
    "longitude" DOUBLE PRECISION NOT NULL,
    "airConditioner" BOOLEAN NOT NULL,
    "babySeat" BOOLEAN NOT NULL,
    "bluetoothAudio" BOOLEAN NOT NULL,
    "smoking" BOOLEAN NOT NULL,
    "dailyPrice" INTEGER NOT NULL,
    "isAvailable" BOOLEAN NOT NULL,
    "comment" TEXT NOT NULL,
    "registrationCertificate" TEXT NOT NULL,
    "ownerId" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Rent" (
    "id" TEXT NOT NULL,
    "start" TIMESTAMP(3) NOT NULL,
    "end" TIMESTAMP(3) NOT NULL,
    "userId" TEXT NOT NULL,
    "carId" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "carPicture" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "description" TEXT,
    "carId" TEXT NOT NULL
);

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
CREATE UNIQUE INDEX "User_id_key" ON "User"("id");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Car_id_key" ON "Car"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Rent_id_key" ON "Rent"("id");

-- CreateIndex
CREATE UNIQUE INDEX "carPicture_id_key" ON "carPicture"("id");

-- CreateIndex
CREATE UNIQUE INDEX "carCategory_id_key" ON "carCategory"("id");

-- CreateIndex
CREATE UNIQUE INDEX "carCategory_name_key" ON "carCategory"("name");

-- CreateIndex
CREATE UNIQUE INDEX "carBrand_id_key" ON "carBrand"("id");

-- CreateIndex
CREATE UNIQUE INDEX "carBrand_name_key" ON "carBrand"("name");

-- CreateIndex
CREATE UNIQUE INDEX "carModel_id_key" ON "carModel"("id");

-- CreateIndex
CREATE UNIQUE INDEX "carModel_name_key" ON "carModel"("name");

-- AddForeignKey
ALTER TABLE "Car" ADD CONSTRAINT "Car_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "carCategory"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Car" ADD CONSTRAINT "Car_carBrandId_fkey" FOREIGN KEY ("carBrandId") REFERENCES "carBrand"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Car" ADD CONSTRAINT "Car_carModelId_fkey" FOREIGN KEY ("carModelId") REFERENCES "carModel"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Car" ADD CONSTRAINT "Car_ownerId_fkey" FOREIGN KEY ("ownerId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Rent" ADD CONSTRAINT "Rent_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Rent" ADD CONSTRAINT "Rent_carId_fkey" FOREIGN KEY ("carId") REFERENCES "Car"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "carPicture" ADD CONSTRAINT "carPicture_carId_fkey" FOREIGN KEY ("carId") REFERENCES "Car"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
