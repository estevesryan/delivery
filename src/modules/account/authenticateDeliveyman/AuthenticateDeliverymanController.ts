import { AuthenticateClientUseCase } from "../authenticateClient/AuthenticateClientUseCase";
import { Request, Response } from "express";

const authenticateDeliverymanUseCase = new AuthenticateClientUseCase();

export class AuthenticateDeliverymanController {
  async handle(request: Request, response: Response) {
    const { username, password } = await request.body;

    const deliverymanToken = await authenticateDeliverymanUseCase.execute({
      username,
      password,
    });

    return response.status(200).json(deliverymanToken);
  }
}
