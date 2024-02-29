import { api } from "@/app/services/api"
import { product } from "@/app/types/product"
import Image from "next/image"
import Link from "next/link"

type SucessResponse = product[]
type BadResponse = undefined;

async function getProducts(): Promise<SucessResponse | BadResponse> {
    try {
        const response = await api("/products", {
            cache: "no-cache"
        })
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error)
    }
}

export default async function Search() {

    const products = await getProducts();
    return (
        <div className="grid grid-cols-9 gap-4">

            {
                products?.map((product, key) => {
                    return (
                        <Link
                            key={key}
                            className="group relative col-span-3 flex justify-center items-end bg-zinc-900 overflow-hidden"
                            href=""
                        >
                            <Image
                                className="group-hover:scale-105 transition duration-500"
                                src={product.image}
                                alt=""
                                width={600}
                                height={500}
                                quality={100}
                            />


                            <div className="absolute bottom-10 right-10 h-12 flex items-center gap-2 max-w-[280px] rounded-full border-2 border-zinc-500 pl-4 bg-black/60 p-1" >


                                <span className="truncate text-sm">{product.title}</span>

                                <span className="flex h-full items-center justify-center rounded-full bg-violet-500 px-4 font-semibold">{product.price.toLocaleString("pt-br", {
                                    currency: "BRL", style: "currency", minimumSignificantDigits: 2
                                })}</span>
                            </div>

                        </Link>

                    )
                })
            }

        </div>
    )
}