import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  await prisma.cliente.create({
    data: {
      nome: "Luan Silva",
      email: "Luan@exemplo.com",
      agendamentos: {
        create: {
          dataHora: new Date('2025-04-08T10:00:00Z'),
          servico: "Corte de cabelo"
        }
      }
    }
  });
}

main()
  .catch((e) => console.error(e))
  .finally(() => prisma.$disconnect());
