import React from "react";
import { motion } from "framer-motion";
import imageUpload from "../assets/images/imageUpload.png";

const Create = () => {
  return (
    <div className="auction-form-container">
      <div className="text-box auction-form">
        <h1 className="center-text">Auction a Card</h1>
        <form>
          <div className="upload-card-container">
            <h2>Upload Image</h2>
            <div className="upload-image-card">
              <div className="upload-image">
                <img src={imageUpload} alt="imageUpload"></img>
              </div>
              <div className="upload">
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
          <div>
            <h3 className="center-text">Rarity</h3>
          </div>
          <div className="rarity-container">
            <div>
              <input name="holo" type="radio" value="holo" id="holo" />
              <label for="holo">Holo</label>
              <input name="Reverse" type="radio" />
              <label for="reverse">Reverse</label>
            </div>
            <div>
              <input name="super-rare" type="radio" />
              <label htmlFor="super-rare">Super-Rare</label>
              <input name="secret-rare" type="radio" />
              <label htmlFor="secret-rare">Secret-Rare</label>
              <input name="promo" type="radio" />
              <label htmlFor="promo">Promo</label>
            </div>
          </div>
          <div>
            <label htmlFor="price"> Asking Price:</label>
            <br></br>
            <input name="price" type="number" />
          </div>
          <div className="center-button">
            <button className="image-submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Create;
