import { hashSync } from "bcryptjs";
import { Response, Request } from "express";
import { CreateProductService } from "../../services/products/CreateProductService";


class CreateProductController {
    async handle(req: Request, res: Response) {
        const { name, price, desctiption, category_id } = req.body;
        let banner = "";
        const createProductService = new CreateProductService();

        if (!req.file) {
            throw new Error("Error upload File")
        } else {

            const { originalname, filename } = req.file;
            console.log(filename);
            const product = await createProductService.execute({
                name,
                price,
                desctiption,
                category_id,
                banner: ''
            });
            return res.json(product);
        }
    }

}

export { CreateProductController }