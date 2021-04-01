import React from "react";
import { motion } from "framer-motion"

import Pokebox from "../components/Pokebox"
import CardDetails from "../components/Card-Details"




const Home = () => {
  return (
    <motion.main initial={{ opacity: 0 }}
    transition={{ duration: .5 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}>
      
      <CardDetails />
      
      {/* key is necessary for exit animations */}
      <Pokebox key='pokebox'/>
      
    </motion.main>
  );
};

export default Home;
