import data from "../products/data.json"

export function GET(){
    const productsFeatureds = data.products.filter(product => product.featured);
    return Response.json(productsFeatureds)
}