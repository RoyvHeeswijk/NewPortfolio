"use client"

import { useEffect, useRef } from "react"

export function StarryBackground() {
    const canvasRef = useRef<HTMLCanvasElement | null>(null)

    useEffect(() => {
        const canvas = canvasRef.current
        if (!canvas) return

        const ctx = canvas.getContext("2d")
        if (!ctx) return

        let animationFrameId: number

        const resizeCanvas = () => {
            if (canvas) {
                canvas.width = window.innerWidth
                canvas.height = window.innerHeight
            }
        }

        resizeCanvas()
        window.addEventListener("resize", resizeCanvas)

        const stars: Array<{ x: number; y: number; radius: number; vx: number; vy: number }> = []
        const numStars = 200

        for (let i = 0; i < numStars; i++) {
            stars.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                radius: Math.random() * 1 + 0.5,
                vx: Math.random() * 0.2 - 0.1,
                vy: Math.random() * 0.2 - 0.1,
            })
        }

        const animate = () => {
            if (ctx && canvas) {
                ctx.clearRect(0, 0, canvas.width, canvas.height)

                ctx.fillStyle = "white"
                stars.forEach((star) => {
                    star.x += star.vx
                    star.y += star.vy
                    if (star.x < 0 || star.x > canvas.width) star.vx = -star.vx
                    if (star.y < 0 || star.y > canvas.height) star.vy = -star.vy
                    ctx.beginPath()
                    ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2)
                    ctx.fill()
                })

                animationFrameId = requestAnimationFrame(animate)
            }
        }

        animate()

        return () => {
            cancelAnimationFrame(animationFrameId)
            window.removeEventListener("resize", resizeCanvas)
        }
    }, [])

    return <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full" />
}
