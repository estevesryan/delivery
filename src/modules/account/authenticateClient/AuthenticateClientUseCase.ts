import { prisma } from "../../../database/prismaClient";
import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";

interface IAuthentucateUser {
  username: string;
  password: string;
}

export class AuthenticateClientUseCase {
  async execute({ username, password }: IAuthentucateUser) {
    // receber o username e password
    const client = await prisma.clients.findFirst({ where: { username } });

    // verificar se o client esta cadastrado
    if (!client) {
      throw new Error("Client não encontrado");
    }

    // verificar se a senha corresponde a o usuário
    const passwordMatch = await compare(password, client.password);

    if (!passwordMatch) {
      throw new Error("Senha incorreta");
    }

    // gerar o token
    const token = sign({ username }, "batatinha_frita", {
      subject: client.id,
      expiresIn: "1d",
    });

    return token;
  }
}
