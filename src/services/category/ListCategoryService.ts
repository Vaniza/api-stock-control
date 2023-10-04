import prismaClient from "../../prisma/index";

class ListCategoryService {
  async execute() {
    // buscar todas as categorias do nosso banco de dados

    const categories = await prismaClient.category.findMany({
      select: {
        id: true,
        name: true
      }
    });
    return categories;
  }
}

export { ListCategoryService };
