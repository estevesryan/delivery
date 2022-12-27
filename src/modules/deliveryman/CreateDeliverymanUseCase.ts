import { prisma } from "../../database/prismaClient";
import { hash } from "bcrypt";

interface IDeliveyman {
  username: string;
  password: string;
}

export class CreateDeliverymanUseCase {
  async execute({ username, password }: IDeliveyman) {
    const deliverymanExist = await prisma.deliveryman.findFirst({
      where: {
        username: {
          equals: username,
          mode: "insensitive",
        },
      },
    });

    if (deliverymanExist) {
      throw new Error("Deliveryman already exists");
    }

    const hashedPassword = await hash(password, 8);

    const deliveryman = await prisma.deliveryman.create({
      data: {
        username: username,
        password: hashedPassword,
      },
    });

    return deliveryman;
  }
}
