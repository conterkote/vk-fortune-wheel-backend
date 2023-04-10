import {PrismaClient} from "@prisma/client";
const prisma = new PrismaClient()

async function prismaInit() {
  await prisma.wheel.upsert({
    where : {id : 1},
    update : {},
    create : {}
  })
  await prisma.prizes.createMany({
    data : [
      {amount : "250"},
      {amount : "400"},
      {amount : "10"},
      {amount : "100"},
      {amount : "150"},
      {amount : "200"},
      {amount : "750"},
      {amount : "Jackpot"},
    ],
    skipDuplicates : true
  })
  console.log('Prisma data is complete')
}

export {prismaInit}

export default prisma