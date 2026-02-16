// import "dotenv/config"
// import { PrismaClient } from "../app/generated/prisma/client"
// import { PrismaPg } from "@prisma/adapter-pg"
// import { readFile } from "fs/promises"
// import { join } from "path"

// // ✅ REQUIRED for Node 22
// const adapter = new PrismaPg({
//   connectionString: process.env.DATABASE_URL!,
// })

// const prisma = new PrismaClient({
//   adapter,
// })

// async function main() {
//   // read products.json
//   const filePath = join(process.cwd(), "prisma/products.json")
//   const file = await readFile(filePath, "utf-8")
//   const products = JSON.parse(file)

//   console.log(`🌱 Seeding ${products.length} products...`)

//   for (const product of products) {
//     await prisma.product.upsert({
//       where: { name: product.id }, // avoid duplicates
//       update: {},
//       create: {
//         name: product.name,
//         company: product.company,
//         description: product.description,
//         featured: product.featured ?? false,
//         image: product.image,
//         price: Number(product.price),
//         clerkId: product.clerkId ?? "seed",
//       },
//     })
//   }

//   console.log("✅ Products seeded successfully!")
// }

// main()
//   .catch(async (e) => {
//     console.error("❌ Seed error:", e)
//     await prisma.$disconnect()
//     process.exit(1)
//   })
//   .finally(async () => {
//     await prisma.$disconnect()
//   })


import "dotenv/config"
import { PrismaClient } from "../app/generated/prisma/client"
import { PrismaPg } from "@prisma/adapter-pg"
import { readFile } from "fs/promises"
import { join } from "path"

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL!,
})

const prisma = new PrismaClient({ adapter })

async function main() {
  const filePath = join(process.cwd(), "prisma/products.json")
  const file = await readFile(filePath, "utf-8")
  const products = JSON.parse(file)

  console.log(`🌱 Seeding ${products.length} products...`)

  for (const product of products) {
    await prisma.product.create({
      data: {
        name: product.name,
        company: product.company,
        description: product.description,
        featured: product.featured ?? false,
        image: product.image,
        price: Number(product.price),
        clerkId: product.clerkId ?? "seed",
      },
    })
  }

  console.log("✅ Products seeded successfully!")
}

main()
  .catch(async (e) => {
    console.error("❌ Seed error:", e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
