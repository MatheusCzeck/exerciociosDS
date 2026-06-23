import { motion } from "framer-motion"
import { alertVariants } from "./alertVariants"

export function SuccessBox() {
 return (
   <motion.div
     variants={alertVariants}
     initial="hidden"
     animate="visible"
     transition={{ duration: 0.4 }}
     style={{
       padding: "16px",
       background: "#d4edda", // Verde claro para sucesso
       color: "#155724",      // Texto verde escuro
       borderRadius: "6px",
       border: "1px solid #c3e6cb"
     }}
   >
     ✅ Sucesso: a ação foi concluída com êxito!
   </motion.div>
 )
}