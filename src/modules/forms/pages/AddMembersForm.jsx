import React from 'react';
import '../components/AddMembers/addmemebers.css';
import Header from '../components/AddMembers/Header';
import FormInput from '../components/AddMembers/FormInput';
import UploadPhoto from '../components/AddMembers/UploadPhoto';
import Members from '../assets/Group (1).png'


function AddMembersForm() {
  return (
    <form className="form">
      <Header />
      <section className="title">
        <img
          loading="lazy"
          src={Members}
          alt=""
          className="titleIcon"
        />
        <h1 className="titleText">ADD Members</h1>
      </section>
      <section className="formSection">
        <div className="formRow">
          <FormInput label="Name" />
          <FormInput label="Position" />
        </div>
      </section>
      <section className="formSection">
        <div className="formRow">
          <FormInput label="Email" type="email" />
          <FormInput label="Phone" type="tel" />
        </div>
      </section>
      <section className="formSection">
        <div className="formRow">
          <FormInput label="Description" />
          <UploadPhoto />
        </div>
      </section>

      <button type="submit" className="submitButton">
          Submit
        </button>
    </form>
  );
}

export default AddMembersForm;
