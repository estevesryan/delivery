import { compare } from "bcrypt";
import { prisma } from "../../../database/prismaClient";
import { sign } from "jsonwebtoken";

interface IDeliveryman {
  username: string;
  password: string;
}

export class AuthenticateDeliverymanUseCase {
  async execute({ username, password }: IDeliveryman): Promise<string> {
    const deliveryman = await prisma.deliveryman.findFirst({
      where: { username },
    });

    if (!deliveryman) {
      throw new Error("Deliveryman not found");
    }

    const passwordMatch = await compare(password, deliveryman.password);

    if (!passwordMatch) {
      throw new Error("Invalid password");
    }

    const token = await sign({ username }, "batatinhafita", {
      subject: deliveryman.id,
      expiresIn: "1d",
    });

    return token;
  }
}
