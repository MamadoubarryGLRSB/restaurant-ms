import { PrismaClient, UserRole } from '@prisma/client';
import * as bcrypt from 'bcrypt';

// Désactiver temporairement les règles ESLint qui causent des problèmes
// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access

const prisma = new PrismaClient();

async function main(): Promise<void> {
  // Suppression des données existantes
  await prisma.session.deleteMany();
  await prisma.user.deleteMany();

  console.log('Données précédentes supprimées');

  // Création de quelques utilisateurs
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call
  const password1 = await bcrypt.hash('password123', 10);
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call
  const password2 = await bcrypt.hash('adminpass', 10);

  const user1 = await prisma.user.create({
    data: {
      email: 'client@example.com',
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      password: password1,
      firstName: 'John',
      lastName: 'Doe',
      phoneNumber: '0123456789',
      address: '123 Main Street, Paris',
      role: UserRole.CLIENT,
    },
  });

  const user2 = await prisma.user.create({
    data: {
      email: 'admin@example.com',
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      password: password2,
      firstName: 'Admin',
      lastName: 'User',
      phoneNumber: '9876543210',
      address: '456 Admin Avenue, Lyon',
      role: UserRole.ADMIN,
    },
  });

  console.log('Utilisateurs de test créés:', { user1, user2 });
}

main()
  .catch((e) => {
    console.error(e);
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    process.exit(1);
  })
  // eslint-disable-next-line @typescript-eslint/no-misused-promises
  .finally(async () => {
    await prisma.$disconnect();
  });