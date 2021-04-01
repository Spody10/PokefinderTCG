import React, { useState } from "react";

import './card.css'
import cardimg from "../../assets/images/test.jpeg"
import arrow from "../../assets/images/text-box-arrow.png";

function CardItem(card) {
  const {
    image,
    name,
    _id,
    askingPrice,
    holo,
    reverse,
    onOpen
  } = card;

  return (
    <div className='card-container'>
            <div className='card-top-container'>
              <div className='card-img-container' style={{ backgroundImage:`url(${image})` }}>
              </div>
              <div className='price'>${askingPrice}</div>
            </div>
            <div className='text-box card-name' onClick={onOpen} id={_id}>
              {name}
              <img src={arrow} alt="clickable arrow"></img>
            </div>
          </div>
  );
}

export default CardItem;