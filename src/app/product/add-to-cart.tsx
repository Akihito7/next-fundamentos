'use client'

import { useState } from "react";
import Test from "./test";

export default function AddToCart({ children }: { children: React.ReactNode }) {

    const [count, setCount] = useState(0);

    function handleAddToCart() {
        setCount(prevState => prevState + 1)
    }

    return (
        <>
            <button onClick={handleAddToCart}>Add to cart ({count})</button>
            {children}
        </>
    )

}