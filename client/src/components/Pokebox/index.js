import React, { useState } from "react";
import { useQuery } from '@apollo/react-hooks';
import { Redirect } from "react-router-dom";

import { QUERY_CARDS } from "../../utils/queries";
import Card from "../Card"
import "./pokebox.css";
import cardimg from "../../assets/images/test.jpeg"
import arrow from "../../assets/images/text-box-arrow.png";

const Pokebox = () => {
  const [arrowClick, setArrowClick] = useState('')

  const { loading, data, fetchMore } = useQuery(QUERY_CARDS, {
    /* variables: {
      limit: 4,
      offset: 0
    }, */
  });
  console.log(data)

  function filterCards() {
    let queryNum = document.location.pathname.split("/")[2]
    console.log(queryNum)
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

  

    return (
      <section className="box-container">

        <div className='box-label-container'>
          <div onClick={clickArrow} id='left-triangle'></div>
          <div className='box-label'></div>
          <div onClick={clickArrow} id='right-triangle'></div>
        </div>

        {arrowClick && < Redirect to={arrowClick} />}

        <div className='pokebox'>
          
        {loading ? <h2>loading</h2>: 
        filterCards().map(card => (
                <Card
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
      </section>
    );
  };
  
  export default Pokebox;