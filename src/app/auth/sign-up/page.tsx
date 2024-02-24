"use client"

export default function SignUp(){

    function addToCart(){
        console.log("Item adicionado ao carrinho")
    }
    return (
        <button onClick={addToCart}>ADD TO CART</button>
    )
}