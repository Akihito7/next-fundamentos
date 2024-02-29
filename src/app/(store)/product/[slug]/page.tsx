import { api } from "@/app/services/api";
import { product } from "@/app/types/product";
import Image from "next/image";

interface ProductsProps {
    params: {
        slug: string;
    }
}

async function getProductSlug(slug: string): Promise<product> {
    const response = await api(`/products/${slug}`)

    const data = await response.json();

    return data;
}

export async function generateMetadata({ params }: ProductsProps) {
    const product = await getProductSlug(params.slug)

    return {
        title: product.title
    }
}

export async function generateStaticParams() {
    const response = await api(`/featured`)

    const data = await response.json();

    return data.map((product: product) => {
        return { slug: product.slug }
    })
}



export default async function Product({ params }: ProductsProps) {

    const product = await getProductSlug(params.slug);

    return (
        <div className="relative grid grid-cols-3 max-h[860px] ">
            <div className="col-span-2 flex justify-center">

                <Image
                    src={product.image} alt=""
                    width={600}
                    height={600}
                    quality={100}
                />
            </div>

            <div className="col-span-1 px-12 flex flex-col justify-center ">
                <h1 className="text-3xl font-bold leading-tight">
                    {product.title}</h1>
                <p
                    className="mt-2 leading-relaxed text-zinc-400"
                >{product.description}</p>


                <div className="mt-8 flex items-center gap-3">
                    <span className="inline-block rounded-full bg-violet-500 px-5 py-2.5">
                        {product.price.toLocaleString("pt-br", {
                            currency: "BRL",
                            style: "currency",
                            minimumSignificantDigits: 2
                        })}
                    </span>

                    <span className="text-sm text-zinc-400">
                        em 12x sem juros de {(product.price / 12).toLocaleString("pt-br", {
                            currency: "BRL",
                            style: "currency"
                        })}
                    </span>
                </div>




                <div className="mt-8 space-y-4">
                    <span className="block font-semibold">Tamanhos</span>

                    <div className="flex gap-2">

                        <button type="button"
                            className="flex h-9 w-14 items-center justify-center
                          rounded-full border border-zinc-700 bg-zinc-800 text-sm font-semibold">
                            P
                        </button>
                        <button type="button"
                            className="flex h-9 w-14 items-center justify-center
                          rounded-full border border-zinc-700 bg-zinc-800 text-sm font-semibold">
                            M
                        </button>
                        <button type="button"
                            className="flex h-9 w-14 items-center justify-center
                          rounded-full border border-zinc-700 bg-zinc-800 text-sm font-semibold">
                            G
                        </button>
                        <button type="button"
                            className="flex h-9 w-14 items-center justify-center
                          rounded-full border border-zinc-700 bg-zinc-800 text-sm font-semibold">
                            GG
                        </button>
                    </div>

                </div>

                <button type="button" className="mt-8  flex h-12 items-center justify-center rounded-full bg-emerald-600 font-semibold text-white">Adicionar ao carrinho</button>
            </div>

        </div>
    )
}