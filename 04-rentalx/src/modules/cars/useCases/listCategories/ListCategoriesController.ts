import { Request, Response } from "express";

import { ListCategoryUseCase } from "./ListCategoriesUseCase";

class ListCategoryController {
    constructor(private listCategoriesUsecase: ListCategoryUseCase) {}

    handle(req: Request, res: Response): Response {
        const repositoriesList = this.listCategoriesUsecase.execute();

        return res.json(repositoriesList);
    }
}

export { ListCategoryController };
