import React, { useState } from 'react';

import Pokebox from "../components/Pokebox"
import CardDetails from "../components/Card-details"




const Home = () => {
  const [isPanelOpen, setIsPanelOpen] = useState(false);
  const [targetedCard, setTargetedCard] = useState('');
   

  const openPanel = (event) => {
    setTargetedCard(event.target.id)
    if(!isPanelOpen) {
      setIsPanelOpen(true)
    }
    /* console.log(data) */
  }

  const closePanel = () => {
    /* setCurrentPhoto({...image, index: i}); */
      setIsPanelOpen(false) 
  }

  return (
    <main>
      
      {isPanelOpen && (
        <CardDetails onClose={closePanel} cardInfo={targetedCard} key='single-card'/>
      )}
      
      {/* key is necessary for exit animations */}
      <Pokebox onOpen={openPanel} key='pokebox'/>
      
    </main>
  );
};

export default Home;
