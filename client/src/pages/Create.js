import React, { useState } from 'react';
import { motion } from "framer-motion";
import { Redirect } from 'react-router-dom';
import { useMutation } from '@apollo/react-hooks';
import { ADD_CARD } from '../utils/mutations';
import Auth from '../utils/auth';


import imageUpload from "../assets/images/imageUpload.png";

const Create = () => {
  const [formState, setFormState] = useState({ name: '', image: '', grading: '', holo: false, reverse: false, superRare: false, secretRare: false, promo: false, askingPrice: '' });
  const [submit, setSubmit] = useState(false);
  const [addCard, { error }] = useMutation(ADD_CARD);
  
  const handleChange = event => {
    const { id, value } = event.target;
    let input = value
    if (id === 'fileupload') {
      const reader = new FileReader();
      const file = event.target.files[0]
      reader.addEventListener("load", function () {
        // convert image file to base64 string
        //console.log(reader.result);
        setFormState({
          ...formState,
          image: reader.result
        });
      }, false);
      
      if (file) {
        reader.readAsDataURL(file);
      }
    } else {
      if (input === "on") {
        input = true
      }
      console.log(input)
      setFormState({
        ...formState,
        [id]: input
      });
    }

    
  };

  const handleFormSubmit = async event => {
    event.preventDefault();
    /* console.log(formState.image) */
    const token = Auth.loggedIn() ? Auth.getToken() : null;
    if (!token) {
      return false;
        }
    const data = new FormData();
        data.append('file', formState.image);
        data.append('upload_preset', 'poketcg');
        const res = await fetch (
            '		https://api.cloudinary.com/v1_1/dwpyfpiyf/image/upload',
            {
                method: 'POST',
                body: data
            }
        )
        const file = await res.json();
        setFormState({
          ...formState,
          image: file.secureUrl
        })
    console.log(formState)
    try {
      const { data } = await addCard({
        variables: { ...formState }
      });

      // Auth.login(data.login.token);
    } catch (e) {
      console.error(e);
    }

    // clear form values
    setFormState({ name: '', image: '', grading: '', holo: false, reverse: false, superRare: false, secretRare: false, promo: false, askingPrice: '' });
    setSubmit(true)
  };

  return (
    <div className="auction-form-container">
      <div className="text-box auction-form">
        <h1 className="center-text">Auction a Card</h1>
        <form onSubmit={handleFormSubmit}>
          <div className="upload-card-container">
            <h2>Upload Image</h2>
            <div className="upload-image-card">
              <div className="upload-image">
                <img src={imageUpload} alt="imageUpload"></img>
              </div>
              <div className="upload">
                <input onChange={handleChange} name="upload" type="file" id="fileupload" />
              </div>
            </div>
          </div>
        
          <div>
            <label htmlFor="name">Card Name</label>
            <input onChange={handleChange} value={formState.name} name="name" type="text" id="name" />
          </div>
          <div>
            <label htmlFor="grading">Card Grading (min 1 max 10):</label>
            <input onChange={handleChange} value={formState.grading} name="grading" type="number" min="1" max="10" id="grading" />
          </div>
          <br></br>
          <div>
            <h3 className="center-text">Rarity</h3>
          </div>

          <div className="rarity-container">
            <div className="inline">
              <input onChange={handleChange} value={formState.holo} name="shiny" type="radio" id="holo" />
              <label htmlFor="holo">Holo</label>
              <input onChange={handleChange} value={formState.reverse} name="shiny" type="radio" id="reverse" />
              <label htmlFor="reverse">Reverse</label>
            </div>

            <div className="inline">
              <input onChange={handleChange} name="rarity" type="radio" id="superRare" />
              <label htmlFor="super-rare">Super-Rare</label>
              <input onChange={handleChange} name="rarity" type="radio" id="secretRare" />
              <label htmlFor="secret-rare">Secret-Rare</label>
              <input onChange={handleChange} name="rarity" type="radio" id="promo" />
              <label htmlFor="promo">Promo</label>
            </div>
          </div>

          <br></br>
          <div>
            <label htmlFor="price"> Asking Price:</label>
            <input onChange={handleChange} name="price" type="number" id="askingPrice"/>
          </div>
          <div className="center-button">
            <button className="image-submit">Submit</button>
          </div>
        </form>
      </div>
      {submit && <Redirect push to="/home/1" />}
    </div>
  );
};

export default Create;
