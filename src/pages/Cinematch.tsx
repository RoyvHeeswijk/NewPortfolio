"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"

export default function CinematRedirect() {
    const router = useRouter()

    useEffect(() => {
        router.push("/CineMatchpage")
    }, [router])

    return (
        <div className="min-h-screen flex items-center justify-center text-gray-400">
            Doorverwijzen...
        </div>
    )
}
