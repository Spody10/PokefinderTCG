import React, { useState } from 'react';
import { motion } from "framer-motion"

import Pokebox from "../components/Pokebox"
import CardDetails from "../components/Card-Details"




const Home = () => {
  const [isPanelOpen, setIsPanelOpen] = useState(true);
  const [targetedCard, setTargetedCard] = useState('');

  const openPanel = (event) => {
    setTargetedCard(event.target.id)
    if(!isPanelOpen) {
      setIsPanelOpen(true)
    }
  }

  const closePanel = () => {
    /* setCurrentPhoto({...image, index: i}); */
      setIsPanelOpen(false) 
  }

  return (
    <motion.main initial={{ opacity: 0 }}
    transition={{ duration: .5 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}>
      
      {isPanelOpen && (
        <CardDetails onClose={closePanel} />
      )}
      
      {/* key is necessary for exit animations */}
      <Pokebox onOpen={openPanel} key='pokebox'/>
      
    </motion.main>
  );
};

export default Home;
