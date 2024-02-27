import { z } from "zod"

const envSchema = z.object({
    NEXT_PUBLIC_API_BASE_URL: z.string().url()
})

const envParsed = envSchema.safeParse(process.env)

if(!envParsed.success){
    console.error("Inválid environment variables")
    throw new Error('Inválid environment variables')
}

export const env = envParsed.data;