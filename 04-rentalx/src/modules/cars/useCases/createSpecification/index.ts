import { SpecificationsRepository } from "../../repositories/implemetations/SpecificationsRepository";
import { CreateEspecificationController } from "./CreateSpecificationController";
import { CreateSpecificationUseCase } from "./CreateSpecificationUseCase";

const specificationsRepository = new SpecificationsRepository();
const createSpecificationUseCase = new CreateSpecificationUseCase(
    specificationsRepository
);

const createEspecificationController = new CreateEspecificationController(
    createSpecificationUseCase
);

export { createEspecificationController };
