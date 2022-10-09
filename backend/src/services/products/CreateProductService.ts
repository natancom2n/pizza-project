import prismaClient from "../../prisma";

interface ProductRequest {
    name: string;
    price: string;
    desctiption: string;
    banner: string;
    category_id: string;

}


class CreateProductService {
    async execute({ name, price, desctiption, banner, category_id }: ProductRequest) {


        // const product = await prismaClient.product.create({
        //     data: {
        //         name: name,
        //         price: price,
        //         description: desctiption,
        //         banner: banner

        //     },
        //     //select declare whats want return:
        //     select: {
        //         id: true,
        //         name: true,
        //         email: true,

        //     }
        // })
        return { ok: true }

    }
}

export { CreateProductService }