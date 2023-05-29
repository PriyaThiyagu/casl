import { cloneDeep } from 'lodash';

import { PrismaClient } from '@prisma/client';

import userData from './seed-data/user';

const prisma = new PrismaClient();

async function main() {

  for (const user of userData) {
    const createAtts = cloneDeep(user);
    delete createAtts.id;
    await prisma.user.upsert({
      where: {
        id: user.id
      },
      create: { ...createAtts },
      update: { ...user }
    });
  }
 }

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (err) => {
    console.log(err)
    await prisma.$disconnect();
  });
