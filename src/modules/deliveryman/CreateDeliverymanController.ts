import { prisma } from "./../../database/prismaClient";
import { Request, Response } from "express";
import { CreateDeliverymanUseCase } from "./CreateDeliverymanUseCase";

const createDeliverymanUseCase = new CreateDeliverymanUseCase();

export class CreateDeliverymanController {
  async handle(request: Request, response: Response) {
    const { username, password } = await request.body;

    const deliveryman = await createDeliverymanUseCase.execute({
      username,
      password,
    });

    response.status(201).send(deliveryman);
  }
}
