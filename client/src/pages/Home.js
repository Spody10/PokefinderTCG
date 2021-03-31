import React from "react";
import { motion } from "framer-motion"
import { useQuery } from '@apollo/react-hooks';

import Pokebox from "../components/Pokebox"

import { QUERY_CARDS } from "../utils/queries";

const Home = () => {
  const { loading, data, fetchMore } = useQuery(QUERY_CARDS, {
    variables: {
      offset: 0,
      limit: 4
    },
  });
  console.log(data)

  return (
    <motion.main initial={{ opacity: 0 }}
    transition={{ duration: .5 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}>
      <section className="card-detail">

      </section>
      
      {/* key is necessary for exit animations */}
      <Pokebox key='pokebox'/>
      
    </motion.main>
  );
};

export default Home;
