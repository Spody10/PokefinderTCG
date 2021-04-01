import React from "react";

import './card-details.css'
import cardimg from "../../assets/images/test.jpeg"


function CardItem(card) {
  const {
    image,
    name,
    _id,
    askingPrice,
    holo,
    reverse,
  } = card;

  return (
    <section className="card-detail">
        <div className='halves-container'>
          <div className='card-detail-top'>
            <div className='card-detail-btn'>
              <button>X</button>
            </div>
            <div className='card-display'>
                <img src={cardimg}></img>
            </div>
          </div>
          <div className='card-detail-bottom'>
            <h3>Ishihara Gx</h3>
            <h3>Set</h3>
            <h3>Promo</h3>
            <h3>PSA 8</h3>
            <h3>Offering for $10,000</h3>
            <h3>Posted by BeatyPete</h3>
            <h3>Contact this seller</h3>
          </div>
        </div>
          
    </section>
  );
}

export default CardItem;