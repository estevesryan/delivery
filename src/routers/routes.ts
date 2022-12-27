import { Router } from "express";
import { AuthenticateClientController } from "../modules/account/authenticateClient/AuthenticateClientController";
import { AuthenticateDeliverymanController } from "../modules/account/authenticateDeliveyman/AuthenticateDeliverymanController";
import { CreateClientController } from "../modules/clients/CreateClientController";
import { CreateDeliverymanController } from "../modules/deliveryman/CreateDeliverymanController";

const routes = Router();

// clients
const authenticateClientController = new AuthenticateClientController();
const createClientController = new CreateClientController();

// deliverymans
const createDeliverymanController = new CreateDeliverymanController();
const authenticateDeliverymanController =
  new AuthenticateDeliverymanController();

// faz autenticações dos usuarios
routes.post("/authenticateClient", authenticateClientController.handle);

// fazer authenticação do deliveryman

routes.post(
  "/authenticateDeliveryman",
  authenticateDeliverymanController.handle
);

// criar um novo Client
routes.post("/client", createClientController.handle);

// cadastro de deliveryman

routes.post("/deliveryman", createDeliverymanController.handle);

export { routes };
