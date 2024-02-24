import React from "react";

export default function ProductLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <h1>Cabeçalho</h1>
            {children}
        </>
    )
}