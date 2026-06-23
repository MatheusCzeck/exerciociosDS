import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { gridVariants } from "../animations/gifGridVariants"
import { GifItem } from "./GifItem"

export function GifGrid({ gifs }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  return (
    <motion.div
      ref={ref}
      variants={gridVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
        gap: "24px",
        marginTop: "20px"
      }}
    >
      {gifs.map(gif => (
        <GifItem key={gif.id} gif={gif} />
      ))}
    </motion.div>
  )
}