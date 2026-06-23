import { motion } from "framer-motion"

import { alertVariants } from "./alertVariants"



export function AlertBox() {

 return (

   <motion.div

     variants={alertVariants}

     initial="hidden"

     animate="visible"

     transition={{ duration: 0.4 }}

     style={{

       padding: "16px",

       background: "#ffeaa7",

       borderRadius: "6px"

     }}

   >

     ⚠️ Atenção: operação realizada com sucesso

   </motion.div>

 )

}