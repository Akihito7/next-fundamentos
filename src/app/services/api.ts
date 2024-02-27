import { env } from "process"

export function api(path: string, init?: RequestInit) {

    const baseUrl = env.NEXT_PUBLIC_API_BASE_URL + "/api";
    const url = baseUrl + path
    
    return fetch(url, init)
}