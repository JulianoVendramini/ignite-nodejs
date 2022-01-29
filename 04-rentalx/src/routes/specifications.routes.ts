import { Router } from "express";

import { createEspecificationController } from "../modules/cars/useCases/createSpecification";

const specificationsRoutes = Router();

specificationsRoutes.post("/", (req, res) => {
    return createEspecificationController.handle(req, res);
});

export { specificationsRoutes };
