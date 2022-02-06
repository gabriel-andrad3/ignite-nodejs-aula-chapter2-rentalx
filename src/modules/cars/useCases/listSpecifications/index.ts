import { SpecificationsRepository } from "../../repositories/implementations/SpecificationsRepository";
import { ListSpecificationsController } from "./ListSpecificationsController";
import { ListSpecificationsUseCase } from "./ListSpecificationsUseCase";

// const specificationRepository = SpecificationRepository.getInstance();
const specificationRepository = null;
const listSpecificationsUseCase = new ListSpecificationsUseCase(
  specificationRepository
);
const listSpecificationsController = new ListSpecificationsController(
  listSpecificationsUseCase
);

export { listSpecificationsController };
