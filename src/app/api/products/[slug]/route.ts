import data from "../data.json"
import { z } from "zod"

export async function GET(req: Request, { params }: { params: { slug: string } }) {
    await new Promise(resolve => setTimeout(resolve, 1000))

    const slugParse = z.string().parse(params.slug)

    const product = data.products.find(product => product.slug === slugParse);

    if (!product) {
        return Response.json({
            message: "Product not found"
        }, {
            status: 400
        })
    }

    return Response.json(product)
}

