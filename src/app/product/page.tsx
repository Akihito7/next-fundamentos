import AddToCart from "./add-to-cart";
import Test from "./test";

export default async function Product() {

    await new Promise(resolve => setTimeout(resolve, 2000));

    const response = await fetch("https://api.github.com/users/Akihito7");
    const user = await response.json();

    return (
        <>
            <h1>Produtos</h1>
            <p>{JSON.stringify(user)}</p>
            <AddToCart>
                <Test />
            </AddToCart>
        </>
    )
}