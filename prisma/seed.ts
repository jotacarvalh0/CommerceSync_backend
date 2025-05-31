import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function main() {
  // Criar categorias
  const category1 = await prisma.category.create({
    data: { name: 'Camisetas' }
  })

  // Criar produtos
  await prisma.product.create({
    data: {
      name: 'Camiseta JavaScript',
      description: 'Camiseta 100% algodão',
      price: 59.90,
      stock: 100,
      categoryId: category1.id
    }
  })
}

main()
  .catch(e => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })