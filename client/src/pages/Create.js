import { motion } from "framer-motion";
import React from "react";

const Create = () => {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      transitiion={{ duration: 0.5 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="text-box">
        <h1 className="center-text">Auction a Card</h1>
        <form>
          <div>
            <h2>Upload Image</h2>
            <div className="upload-image-card">
              <div className="upload-image">
                <img></img>
              </div>
              <div className="upload">
                <label htmlFor="fileupload">Upload Image</label>
                <br></br>
                <input name="upload" type="file" id="fileupload" />
              </div>
            </div>
          </div>
        </form>
        <form>
          <div>
            <label htmlFor="card-name">Card Name</label>
            <br></br>
            <input name="card-name" type="text" id="card-name" />
          </div>
          <div>
            <label htmlFor="grading">Card Grading (min 1 max 10):</label>
            <br></br>
            <input name="grading" type="number" min="1" max="10" id="grading" />
          </div>
          <div className="row">
            <input name="Holo" type="radio" />
            <input name="Reverse" type="radio" />
          </div>
          <div className="row">
            <input name="Super-Rare" type="radio" />
            <input name="Secret-Rare" type="radio" />
            <input name="Promo" type="radio" />
          </div>
          <div>
            <label htmlFor="price"> Asking Price:</label>
            <br></br>
            <input
              name="price"
              type="number"
              min=".01"
              max="999999999999999.99"
            />
          </div>
          <div>
            <button>Submit</button>
          </div>
        </form>
      </div>
    </motion.main>
  );
};

export default Create;
