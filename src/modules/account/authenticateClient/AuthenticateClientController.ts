import { AuthenticateClientUseCase } from "./AuthenticateClientUseCase";
import { Request, Response } from "express";

const authenticateClientUseCase = new AuthenticateClientUseCase();

export class AuthenticateClientController {
  async handle(request: Request, response: Response) {
    const { username, password } = request.body;

    const user = await authenticateClientUseCase.execute({
      username,
      password,
    });

    return response.status(200).json(user);
  }
}
