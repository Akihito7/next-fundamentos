import { Skeleton } from "@/components/skeleton";

export default function LoadingHome() {
    return (
        <div className="grid max-h-[680px] grid-rows-6 grid-cols-9 gap-6">
            <Skeleton
                className="col-span-6 row-span-6 h-[580px]"
            />
            <Skeleton
                className="col-span-3 row-span-3"
            />
            <Skeleton
                className="col-span-3 row-span-3"
            />
        </div>
    )
}