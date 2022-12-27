import { prisma } from "../../database/prismaClient";
import { hash } from "bcrypt";

interface ICreateCliente {
  username: string;
  password: string;
}

export class CreateClientUseCase {
  async execute({ username, password }: ICreateCliente) {
    const clientExist = await prisma.clients.findFirst({
      where: {
        username: {
          equals: username,
          mode: "insensitive",
        },
      },
    });

    if (clientExist) {
      throw new Error("Client already exists");
    }

    const hashedPassword = await hash(password, 8);

    const client = await prisma.clients.create({
      data: {
        username: username,
        password: hashedPassword,
      },
    });

    return client;
  }
}
