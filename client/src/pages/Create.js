import React from "react";
import { motion } from "framer-motion";
import imageUpload from "../assets/images/imageUpload.png";

const Create = () => {
  return (
    <div className="text-box auction-form">
      <h1 className="center-text">Auction a Card</h1>
      <form>
        <div>
          <h2>Upload Image</h2>
          <div className="upload-image-card">
            <div className="upload-image">
              <img src={imageUpload} alt="imageUpload"></img>
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
        <div className="rarity">
          <label htmlFor="holo">Holo</label>
          <input name="holo" type="radio" />
          <label htmlFor="reverse">Reverse</label>
          <input name="Reverse" type="radio" />
        </div>
        <br></br>
        <br></br>
        <div className="row">
          <label htmlFor="super-rare">Super-Rare</label>
          <input name="super-rare" type="radio" />
          <label htmlFor="secret-rare">Secret-Rare</label>
          <input name="secret-rare" type="radio" />
          <label htmlFor="promo">Promo</label>
          <input name="promo" type="radio" />
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
        <div className="center-button">
          <button className="image-submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default Create;
