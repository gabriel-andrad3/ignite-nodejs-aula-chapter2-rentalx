import { Router } from "express";

import { ensureAuthentication } from "../middleware/ensureAuthentication";
import { CreateSpecificationController } from "../modules/cars/useCases/createSpecification/CreateSpecificationController";
import { ListSpecificationsController } from "../modules/cars/useCases/listSpecifications/ListSpecificationsController";

const specificationRoutes = Router();

const createSpecificationController = new CreateSpecificationController();
const listSpecificationsController = new ListSpecificationsController();

specificationRoutes.use(ensureAuthentication);
specificationRoutes.post("/", createSpecificationController.handle);

specificationRoutes.get("/", listSpecificationsController.handle);

export { specificationRoutes };
