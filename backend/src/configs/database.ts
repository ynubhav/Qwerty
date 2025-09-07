import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";

let prisma: PrismaClient | null = null;

export function getPrisma(env: any) {
  if (!prisma) {
    prisma = new PrismaClient({
      datasourceUrl: env.DATABASE_URL,
    }).$extends(withAccelerate()) as unknown as PrismaClient;
    console.log('Connected to Database');
  }
  return prisma;
}
