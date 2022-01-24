import { CategoriesRepository } from "../../repositories/CategoriesRepository";
import { ListCategoryController } from "./ListCategoriesController";
import { ListCategoryUseCase } from "./ListCategoriesUseCase";

const categoryRepository = CategoriesRepository.getInstance();
const listCategoriesUsecase = new ListCategoryUseCase(categoryRepository);
const listCategoriesController = new ListCategoryController(
    listCategoriesUsecase
);

export { listCategoriesController };
