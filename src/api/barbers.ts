import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default async function handler(req, res) {
  if (req.method === 'GET') {
    const barbers = await prisma.barber.findMany()
    res.status(200).json(barbers)
  } else if (req.method === 'POST') {
    const { name, email } = req.body
    const newBarber = await prisma.barber.create({ data: { name, email } })
    res.status(201).json(newBarber)
  } else if (req.method === 'DELETE') {
    const { id } = req.body
    await prisma.barber.delete({ where: { id } })
    res.status(204).end()
  } else {
    res.status(405).end()
  }
}
