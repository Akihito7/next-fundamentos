import data from "../products/data.json"

export async function GET(){

    await new Promise(resolve => setTimeout(resolve, 1000))
    
    const productsFeatureds = data.products.filter(product => product.featured);
    return Response.json(productsFeatureds)
}