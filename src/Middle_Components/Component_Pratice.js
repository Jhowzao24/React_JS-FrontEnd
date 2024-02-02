import React from 'react';
import FirstStud from './Pratice_Files/Strings_Pratices';
import { motion } from 'framer-motion';

function PraticeComponents() {
  return (
    <div style={{paddingLeft: '50px', width: '770px'}}><hr/>
    <motion.div
    initial={{scale: 0.3}}
    animate={{scale: 1}}
    transition={{duration: 1}}>
      <FirstStud/>
    </motion.div>
    </div>
  )
}

export default PraticeComponents;