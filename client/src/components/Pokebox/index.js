import React, { useState, useEffect } from "react";
import { useQuery } from '@apollo/react-hooks';
import { Redirect } from "react-router-dom";
import { motion } from "framer-motion"

import { QUERY_CARDS } from "../../utils/queries";
import Card from "../Card"
import "./pokebox.css";
import cardimg from "../../assets/images/test.jpeg"
import arrow from "../../assets/images/text-box-arrow.png";

const Pokebox = ({onOpen}) => {
  const [arrowClick, setArrowClick] = useState('')

  const { loading, data, fetchMore } = useQuery(QUERY_CARDS, {
    /* variables: {
      limit: 4,
      offset: 0
    }, */
  });
  localStorage.setItem("cards", JSON.stringify(data))

  function filterCards() {
    let queryNum = document.location.pathname.split("/")[2]
    return data.cards.slice((queryNum - 1) * 6, queryNum * 6);
  }

  function clickArrow(event) {
    if (event.target.id === 'right-triangle') {
      let goto = parseInt(document.location.pathname.split("/")[2]) + 1
      setArrowClick(`/home/${goto}`)
    } else {
      let goto = parseInt(document.location.pathname.split("/")[2]) - 1
      if (goto > 0) {
        setArrowClick(`/home/${goto}`)
      }
    }
  }

  /* const variants = {
    enter: () => {
      return {
        x: direction === 'left' ? -2000 : 2000,
      };
    },
    center: {
      x: 0,
    },
    exit: () => {
      return {
        x: direction === 'left' ? 2000 : -2000,
      };
    }
  }; */

    return (
      <motion.section className="box-container"
        initial={{ x: 2000 }}
        animate={{ x: 0 }}
        exit={{ x: -2000 }}
        transition={{ duration: .5 }}
        /* variants={variants}
          initial="enter"
          animate="center"
          exit="exit" */
      >

        <div className='box-label-container'>
          <div onClick={clickArrow} id='left-triangle'></div>
          <div className='box-label'>
            <div>
              Box {document.location.pathname.split("/")[2]}
            </div>
          </div>
          <div onClick={clickArrow} id='right-triangle'></div>
        </div>

        {arrowClick && < Redirect to={arrowClick} />}

        <div className='pokebox'>
          
        {loading ? <h2>loading</h2>: 
        filterCards().map(card => (
                <Card
                  onOpen={onOpen}
                  key= {card._id}
                  _id={card._id}
                  image={card.image}
                  name={card.name}
                  askingPrice={card.askingPrice}
                  holo={card.holo}
                  reverse={card.reverse}
                />
            ))}
            {  null}
        </div>
      </motion.section>
    );
  };
  
  export default Pokebox;