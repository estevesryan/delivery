import { Router } from "express";
import { AuthenticateClientController } from "../modules/account/authenticateClient/AuthenticateClientController";
import { CreateClientController } from "../modules/clients/CreateClientController";

const routes = Router();

const authenticateClientController = new AuthenticateClientController();

const createClientController = new CreateClientController();

// faz autenticações dos usuarios
routes.post("/authenticate", authenticateClientController.handle);

// criar um novo Client
routes.post("/client", createClientController.handle);

export { routes };
