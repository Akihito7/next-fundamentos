import { Skeleton } from "@/components/skeleton"

export default function LoadingSearch() {
    const productsLength = ["1", "2", "3", "4", "5"]

    return (
        <div className="grid grid-cols-9 gap-4">
            {
                productsLength.map((skeleton, key) => (
                    <Skeleton
                         key={key}
                        className="col-span-3 h-[420px] rounded-none"
                    />
                ))
            }

        </div>
    )
}