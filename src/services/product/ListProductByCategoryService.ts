import prismaClient from "../../prisma/index";

interface ListProductByCategoryIdRequest {
  category_id: string;
}

class ListProductByCategorService {
  async execute({ category_id }: ListProductByCategoryIdRequest) {
    const findProductByCategoryId = await prismaClient.product.findMany({
      where: {
        category_id: category_id
      }
    });

    return findProductByCategoryId;
  }
}

export { ListProductByCategorService };
