import {
  Car,
  carBrand,
  carCategory,
  carModel,
  PrismaClient,
  User,
} from "@prisma/client";
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
  drivingLicenseId: faker.vehicle.vrm(),
  dateOfIssueDrivingLicense: faker.date.past(),
  placeOfIssueDrivingLicense: faker.address.streetAddress(),
});

const fakerCarCategory = (): carCategory => ({
  id: faker.datatype.uuid(),
  name: faker.vehicle.type(),
});

const fakerCarBrand = (): carBrand => ({
  id: faker.datatype.uuid(),
  name: faker.vehicle.manufacturer(),
});

const fakerCarModel = (): carModel => ({
  id: faker.datatype.uuid(),
  name: faker.vehicle.model(),
});

const fakeCategoriesArray = new Array(20)
  .fill(null)
  .map(() => fakerCarCategory());

const fakeBrandArray = new Array(20).fill(null).map(() => fakerCarBrand());

const fakeModelArray = new Array(20).fill(null).map(() => fakerCarModel());

async function main() {
  const fakerRounds = 10;
  dotenv.config();
  console.log("Seeding...");
  /// --------- Users ---------------
  for (let i = 0; i < fakerRounds; i += 1) {
    // eslint-disable-next-line no-await-in-loop
    await prisma.user.create({ data: fakerUser() });
    console.log(`user created 🌱`);
  }
  for (let i = 0; i < fakerRounds; i += 1) {
    // eslint-disable-next-line no-await-in-loop
    await prisma.carCategory.createMany({
      data: fakeCategoriesArray,
      skipDuplicates: true,
    });
    console.log(`20 categories created 🌱`);
  }
  for (let i = 0; i < fakerRounds; i += 1) {
    // eslint-disable-next-line no-await-in-loop
    await prisma.carBrand.createMany({
      data: fakeBrandArray,
      skipDuplicates: true,
    });
  }
  for (let i = 0; i < fakerRounds; i += 1) {
    // eslint-disable-next-line no-await-in-loop
    await prisma.carModel.createMany({
      data: fakeModelArray,
      skipDuplicates: true,
    });
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
