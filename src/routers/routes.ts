import { Router } from "express";
import { AuthenticateClientController } from "../modules/account/authenticateClient/AuthenticateClientController";
import { CreateClientController } from "../modules/clients/CreateClientController";
import { CreateDeliverymanController } from "../modules/deliveryman/CreateDeliverymanController";

const routes = Router();

// clients
const authenticateClientController = new AuthenticateClientController();
const createClientController = new CreateClientController();

// deliverymans
const createDeliverymanController = new CreateDeliverymanController();

// faz autenticações dos usuarios
routes.post("/authenticate", authenticateClientController.handle);

// criar um novo Client
routes.post("/client", createClientController.handle);

// cadastro de deliveryman

routes.post("/deliveryman", createDeliverymanController.handle);

export { routes };
