import { PrismaClient } from '../src/generated/prisma';

const prisma = new PrismaClient();

async function main() {
  console.log('Seeding database...');
  await prisma.universes.create({
    data: {
      title: 'Default Fantasy RPG',
      content: {
        description: 'Default Fantasy RPG is a standard role-playing game.',
      },
    },
  });

  await prisma.universes.create({
    data: {
      title: 'Default Space Opera RPG',
      content: {
        description: 'Default Space Opera RPG is a standard role-playing game.',
      },
    },
  });

  await prisma.universes.create({
    data: {
      title: 'Default Slice-of-Life RPG',
      content: {
        description: 'Default Slice-of-Life RPG is a standard role-playing game.',
      },
    },
  });

  console.log('Database seeded successfully');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });