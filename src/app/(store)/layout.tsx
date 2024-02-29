import Header from "@/components/header";

export default function ({ children }: { children: React.ReactNode }) {
    return (
        <div className="mx-auto min-h-screen w-full max-w-[1600px] grid-rows-[min-content_max_content] gap-5 px-8 pt-8">
            <Header />
            {children}
        </div>
    )
}