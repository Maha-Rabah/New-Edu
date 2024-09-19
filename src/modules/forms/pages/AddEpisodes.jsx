import React from "react";
import '../components/AddMembers/addmemebers.css';
import Header from '../components/AddMembers/Header';
import FormInput from '../components/AddMembers/FormInput';
import UploadPhotos from '../components/AddEpisodes/UploadPhotos';
import Episodes from '../assets/Group.png'


const AddEpisodes = () => {
  return (
    <form className="form">
      <Header />
      <section className="title">
        <img
          loading="lazy"
          src={Episodes} 
          alt=""
          className="titleIcon"
        />
        <h1 className="titleText">ADD Episodes</h1>
      </section>


      <section className="formSection">
        <div className="formRow">
          <FormInput label="Telegram" />
          <FormInput label="Youtube" />
        </div>
      </section>


      <section className="formSection">
        <div className="formRow">
          <FormInput label="Name" />
          <UploadPhotos />
        </div>
      </section>


      
      <button type="submit" className="submitButton">
        Submit
      </button>
    </form>
  );
};

export default AddEpisodes;