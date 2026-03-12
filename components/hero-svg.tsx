"use client"

import { useEffect, useRef } from "react"

export function HeroSvg() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    // Load and process the SVG
    fetch("/x.svg")
      .then((res) => res.text())
      .then((svgText) => {
        container.innerHTML = svgText

        const svg = container.querySelector("svg")
        if (!svg) return

        // Make SVG responsive
        svg.setAttribute("width", "100%")
        svg.setAttribute("height", "100%")
        svg.style.maxWidth = "100%"
        svg.style.height = "auto"

        // Find all blue elements and animate them
        const allElements = svg.querySelectorAll("*")
        let delay = 0

        allElements.forEach((el) => {
          const fill = el.getAttribute("fill")
          const style = el.getAttribute("style")
          
          // Check for blue colors (various formats)
          const isBlue =
            (fill && /^#([0-9a-f]{2})?([4-9a-f][0-9a-f])?([4-9a-f][0-9a-f])$/i.test(fill)) ||
            (fill && fill.toLowerCase().includes("blue")) ||
            (fill && /^#[0-9a-f]*[4-9a-f]{2}$/i.test(fill)) ||
            (fill && /rgb\s*\(\s*\d+\s*,\s*\d+\s*,\s*(1[5-9]\d|2[0-5]\d)\s*\)/i.test(fill)) ||
            (style && style.toLowerCase().includes("blue")) ||
            // Common blue hex values
            (fill && ["#0000ff", "#0066ff", "#0099ff", "#00aaff", "#00bbff", "#00ccff", "#00ddff", "#00eeff", "#00ffff", 
                      "#3366ff", "#3399ff", "#33aaff", "#33bbff", "#33ccff",
                      "#6699ff", "#66aaff", "#66bbff", "#66ccff",
                      "#0000cc", "#0000aa", "#000088", "#000066",
                      "#1e90ff", "#4169e1", "#6495ed", "#87ceeb", "#87cefa", "#00bfff", "#1e90ff",
                      "#4682b4", "#5f9ea0", "#6495ed", "#7b68ee", "#6a5acd",
                      "#0077ff", "#0088ff", "#00a0ff", "#0af", "#08f", "#06f", "#00f",
                      "#2563eb", "#3b82f6", "#60a5fa", "#93c5fd"].some(
              (blueHex) => fill?.toLowerCase() === blueHex
            ))

          if (isBlue) {
            // Apply animation styles
            el.setAttribute("style", `
              ${style || ""}
              animation: pulse-glow 3s ease-in-out infinite, float 4s ease-in-out infinite;
              animation-delay: ${delay}s;
              transform-origin: center;
              transform-box: fill-box;
            `)
            delay += 0.15
          }
        })

        // Add keyframes to the SVG
        const styleEl = document.createElementNS("http://www.w3.org/2000/svg", "style")
        styleEl.textContent = `
          @keyframes pulse-glow {
            0%, 100% {
              filter: drop-shadow(0 0 2px rgba(96, 165, 250, 0.4));
              opacity: 1;
            }
            50% {
              filter: drop-shadow(0 0 8px rgba(96, 165, 250, 0.9));
              opacity: 0.9;
            }
          }
          @keyframes float {
            0%, 100% {
              transform: translateY(0);
            }
            50% {
              transform: translateY(-3px);
            }
          }
        `
        svg.insertBefore(styleEl, svg.firstChild)
      })
  }, [])

  return (
    <div 
      ref={containerRef} 
      className="w-full max-w-4xl mx-auto"
      aria-label="Hero graphic"
    />
  )
}
