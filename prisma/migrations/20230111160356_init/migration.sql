-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "firstname" TEXT NOT NULL,
    "lastname" TEXT NOT NULL,
    "birthday" TIMESTAMP(3) NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "phoneNumber" TEXT NOT NULL,
    "profilPicture" TEXT,
    "drivingLicenseId" INTEGER NOT NULL,
    "dateOfIssueDrivingLicense" TIMESTAMP(3) NOT NULL,
    "placeOfIssueDrivingLicense" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Car" (
    "id" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "brand" TEXT NOT NULL,
    "model" TEXT NOT NULL,
    "engine" TEXT NOT NULL,
    "gearbox" TEXT NOT NULL,
    "odometer" INTEGER NOT NULL,
    "description" TEXT NOT NULL,
    "mileagePackage" INTEGER NOT NULL,
    "address" TEXT NOT NULL,
    "latitude" INTEGER NOT NULL,
    "longitude" INTEGER NOT NULL,
    "airConditioner" BOOLEAN NOT NULL,
    "babySeat" BOOLEAN NOT NULL,
    "bluetoothAudio" BOOLEAN NOT NULL,
    "smoking" BOOLEAN NOT NULL,
    "dailyPrice" INTEGER NOT NULL,
    "isAvailable" BOOLEAN NOT NULL,
    "comment" TEXT NOT NULL,
    "registrationCertificate" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "Rent" (
    "id" TEXT NOT NULL,
    "start" TIMESTAMP(3) NOT NULL,
    "end" TIMESTAMP(3) NOT NULL
);

-- CreateTable
CREATE TABLE "carPicture" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "description" TEXT,
    "carId" TEXT NOT NULL
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

-- AddForeignKey
ALTER TABLE "carPicture" ADD CONSTRAINT "carPicture_carId_fkey" FOREIGN KEY ("carId") REFERENCES "Car"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
