import Image from "next/image";
import Link from "next/link";

export default function Home() {
    return (
        <div className="grid max-h-[680px] grid-rows-6 grid-cols-9 gap-6">

            <Link href="/" className="group relative col-span-6 row-span-6 rounded-lg bg-zinc-900 overflow-hidden flex justify-center items-end">

                <Image
                    src="/moletom-never-stop-learning.png"
                    alt=""
                    width={680}
                    height={680}
                    quality={100}
                    className="group-hover:scale-105 transition-transform duration-500"
                />

                <div className="absolute bottom-28 right-28 h-12 flex items-center gap-2 max-w-[280px] rounded-full border-2 border-zinc-500 pl-4 bg-black/60 p-1" >

                    <span className="text-sm truncate">Moletom never stop learning</span>
                    <span className="flex h-full items-center justify-center rounded-full bg-violet-500 px-4 font-semibold px-4">R$129</span>

                </div>

            </Link>

            <Link href="/"
                className="group relative col-span-3 row-span-3 rounded-lg bg-zinc-900 overflow-hidden flex justify-center items-end"
            >

                <Image
                    src="/moletom-java.png"
                    alt=""
                    width={320}
                    height={320}
                    quality={100}
                    className="group-hover:scale-105 transition-transform duration-500"


                />

                <div className="absolute bottom-10 right-10 h-12 flex items-center gap-2 max-w-[280px] rounded-full border-2 border-zinc-500 pl-4 bg-black/60 p-1" >

                    <span className="text-sm truncate">Moletom never stop learning</span>
                    <span className="flex h-full items-center justify-center rounded-full bg-violet-500 px-4 font-semibold px-4">R$129</span>

                </div>



            </Link>
            <Link href="/"
                className="group relative col-span-3 row-span-3 rounded-lg bg-zinc-900 overflow-hidden flex justify-center items-end"
            >

                <Image
                    src="/moletom-ai-side.png"
                    alt=""
                    width={320}
                    height={320}
                    quality={100}
                    className="group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute bottom-10 right-10 h-12 flex items-center gap-2 max-w-[280px] rounded-full border-2 border-zinc-500 pl-4 bg-black/60 p-1" >

                    <span className="text-sm truncate">Moletom never stop learning</span>
                    <span className="flex h-full items-center justify-center rounded-full bg-violet-500 px-4 font-semibold px-4">R$129</span>

                </div>




            </Link>
        </div>
    )
}