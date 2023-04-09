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
      {amout : "250"},
      {amout : "400"},
      {amout : "10"},
      {amout : "100"},
      {amout : "150"},
      {amout : "200"},
      {amout : "750"},
      {amout : "Jackpot"},
    ],
    skipDuplicates : true
  })
  console.log('Prisma data is complete')
}

export {prismaInit}

export default prisma