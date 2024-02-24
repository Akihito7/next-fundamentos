export default function AuthLayout({ children } : { children: React.ReactNode; }) {
    return (
        <>
            <div>{children}</div>
            <h1>Painel de auth</h1>
        </>
    )
} 