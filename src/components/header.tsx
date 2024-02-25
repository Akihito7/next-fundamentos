import { Search, ShoppingBag } from 'lucide-react'
import Image from 'next/image'
import Link from "next/link"

export default function () {
    return (
        <div className="flex w-full items-center justify-between">

            <div className='flex items-center gap-5'>
                <Link href="/" className='text-2xl font-extrabold text-white'>
                    devstore
                </Link>


                <form action={"/"} className='flex items-center w-[320px] bg-zinc-900 rounded-full px-5 py-3 ring-zinc-700 gap-4' >
                    <Search className='w-5 h-5' />
                    <input
                        placeholder='Buscar produtos'
                        className='bg-transparent flex-1 text-sm outline-none placeholder: text-zinc-500'
                        type="text"
                    />
                </form>
            </div>
            <div className='flex items-center gap-4'>
                <div className='flex items-center gap-2'>
                    <ShoppingBag className='w-4 h-4' />
                    <span className='text-sm '>Cart (3)</span>
                </div>

                <div className='w-px h-4 bg-zinc-700'></div>

                <div className='flex items-center gap-2'>

                    <Link href="/" className='flex items-center gap-2 hover:underline'>
                        <span className='text-sm'>Account</span>
                    </Link>
                    <Image
                        src="https://github.com/akihito7.png"
                        alt=''
                        className='w-6 h-6 rounded-full'
                        width={24}
                        height={24}
                    />
                </div>
            </div>
        </div>

    )
}