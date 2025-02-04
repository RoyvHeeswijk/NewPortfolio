"use client"

import { useEffect, useRef } from "react"

interface Star {
    x: number
    y: number
    radius: number
    vx: number
    vy: number
}

interface ConstellationPoint {
    x: number
    y: number
    vx: number
    vy: number
}

export function Constellation() {
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

        const stars: Star[] = []
        const numStars = 100
        const numConstellations = 5
        const constellations: ConstellationPoint[][] = []

        for (let i = 0; i < numStars; i++) {
            stars.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                radius: Math.random() * 1 + 0.5,
                vx: Math.random() * 0.2 - 0.1,
                vy: Math.random() * 0.2 - 0.1,
            })
        }

        for (let i = 0; i < numConstellations; i++) {
            const numPoints = Math.floor(Math.random() * 5) + 3
            const points: ConstellationPoint[] = []
            for (let j = 0; j < numPoints; j++) {
                points.push({
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,
                    vx: Math.random() * 0.1 - 0.05,
                    vy: Math.random() * 0.1 - 0.05,
                })
            }
            constellations.push(points)
        }

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height)

            // Update and draw stars
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

            // Update and draw constellations
            ctx.strokeStyle = "rgba(255, 255, 255, 0.2)"
            constellations.forEach((constellation) => {
                ctx.beginPath()
                constellation.forEach((point, index) => {
                    point.x += point.vx
                    point.y += point.vy
                    if (point.x < 0 || point.x > canvas.width) point.vx = -point.vx
                    if (point.y < 0 || point.y > canvas.height) point.vy = -point.vy
                    if (index === 0) {
                        ctx.moveTo(point.x, point.y)
                    } else {
                        ctx.lineTo(point.x, point.y)
                    }
                })
                ctx.stroke()
            })

            animationFrameId = requestAnimationFrame(animate)
        }

        animate()

        return () => {
            cancelAnimationFrame(animationFrameId)
            window.removeEventListener("resize", resizeCanvas)
        }
    }, [])

    return <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full" />
}

