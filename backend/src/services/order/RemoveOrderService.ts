import prismaClient from "../../prisma";

interface OrderRequest {
    order_id: string;
}

class RemoveOrderService {
    async execute({ order_id }: OrderRequest) {

        //delete order of database
        const order = await prismaClient.order.delete({
            where: {
                id: order_id
            }
        })
        return order;
    }
}

export { RemoveOrderService }