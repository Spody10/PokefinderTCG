import React from "react";
import { motion } from "framer-motion"

const Home = () => {
  return (
    <motion.main initial={{ opacity: 0 }}
    transition={{ duration: 1 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}>
      <section className="card-detail">

      </section>
      
      <section className="box-container">
        <div className='pokebox'>

        </div>
      </section>
    </motion.main>
  );
};

export default Home;
