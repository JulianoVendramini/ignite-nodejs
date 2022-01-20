import { Category } from "../../model/Category";
import { ICategoriesRepository } from "../../repositories/ICategoriesRepository";

class ListCategoryUseCase {
    // eslint-disable-next-line prettier/prettier
    constructor(private categoriesRepository: ICategoriesRepository) { }

    execute(): Category[] {
        const allCategories = this.categoriesRepository.list();

        return allCategories;
    }
}

export { ListCategoryUseCase };
