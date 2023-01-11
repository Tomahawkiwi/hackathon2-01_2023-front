import { Car, carCategory, PrismaClient, User } from "@prisma/client";
import { faker } from "@faker-js/faker";
import * as dotenv from "dotenv";

const prisma = new PrismaClient();

const fakerUser = (): User => ({
  id: faker.datatype.uuid(),
  firstname: faker.name.firstName(),
  lastname: faker.name.lastName(),
  birthday: faker.date.birthdate(),
  email: faker.internet.email(),
  password: faker.internet.password(),
  address: faker.address.streetAddress(),
  phoneNumber: faker.phone.number(),
  profilPicture: faker.image.avatar(),
  drivingLicenseId: faker.random.numeric(),
  dateOfIssueDrivingLicense: faker.date.past(),
  placeOfIssueDrivingLicense: faker.address.streetAddress(),
});

const fakerCarCategory = (): carCategory => ({
  id: faker.datatype.uuid(),
  name: faker.vehicle.type(),
});

const fakerCarBrand = (): carCategory => ({
  id: faker.datatype.uuid(),
  name: faker.vehicle.manufacturer(),
});

const fakerCarModel = (): carCategory => ({
  id: faker.datatype.uuid(),
  name: faker.vehicle.model(),
});

async function main() {
  const fakerRounds = 10;
  dotenv.config();
  console.log("Seeding...");
  /// --------- Users ---------------
  for (let i = 0; i < fakerRounds; i += 1) {
    // eslint-disable-next-line no-await-in-loop
    await prisma.user.create({ data: fakerUser() });
  }
  for (let i = 0; i < fakerRounds; i += 1) {
    // eslint-disable-next-line no-await-in-loop
    await prisma.carCategory.create({ data: fakerCarCategory() });
  }
  for (let i = 0; i < fakerRounds; i += 1) {
    // eslint-disable-next-line no-await-in-loop
    await prisma.carBrand.create({ data: fakerCarBrand() });
  }
  for (let i = 0; i < fakerRounds; i += 1) {
    // eslint-disable-next-line no-await-in-loop
    await prisma.carModel.create({ data: fakerCarModel() });
  }
}

main()
  .catch((e: object) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
