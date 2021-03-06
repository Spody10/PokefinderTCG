
import React from "react";
import { motion } from "framer-motion"


import './card-details.css'


function CardItem({ onClose, cardInfo }) {

  const cardsList = JSON.parse(localStorage.getItem("cards")) || [];

  let selectedCard = cardsList.cards.find(card => card._id === cardInfo)

  

  return (
    <motion.section className="card-detail"
    initial={{ x: -500 }}
    transition={{ duration: .5 }}
    animate={{ x: 0 }}
    exit={{ x: -500 }}
    >
        <div className='halves-container'>
          <div className='card-detail-top'>
            <div className='card-detail-btn'>
              <button onClick={onClose}>X</button>
            </div>
            <div className='card-display'>
                <img src={selectedCard.image}></img>
            </div>
          </div>
          <div className='card-detail-bottom'>
            <h3>{selectedCard.name}</h3>
            {selectedCard.holo && <h3>holographic</h3>}
            {selectedCard.reverse && <h3>reverse</h3>}
            {/* <h3>Set</h3> */}
            {selectedCard.promo && <h3>Promo</h3>}
            {selectedCard.superRare && <h3>Super Rare</h3>}
            {selectedCard.secretRare && <h3>Secret Rare</h3>}
            {selectedCard.grading && <h3>Grade: {selectedCard.grading}</h3>}
            <h3>Offering for ${selectedCard.askingPrice}</h3>
            <h3><a href={"mailto:" + selectedCard.email}>Contact this seller</a></h3>
          </div>
        </div>
          
    </motion.section>
  );
}

export default CardItem;