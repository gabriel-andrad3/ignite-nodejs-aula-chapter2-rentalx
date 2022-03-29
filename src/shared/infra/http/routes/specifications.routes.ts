import { Router } from "express";

import { CreateSpecificationController } from "@modules/cars/useCases/createSpecification/CreateSpecificationController";
import { ListSpecificationsController } from "@modules/cars/useCases/listSpecifications/ListSpecificationsController";

import { ensureAuthentication } from "../middleware/ensureAuthentication";

const specificationRoutes = Router();

const createSpecificationController = new CreateSpecificationController();
const listSpecificationsController = new ListSpecificationsController();

specificationRoutes.use(ensureAuthentication);
specificationRoutes.post("/", createSpecificationController.handle);

specificationRoutes.get("/", listSpecificationsController.handle);

export { specificationRoutes };
