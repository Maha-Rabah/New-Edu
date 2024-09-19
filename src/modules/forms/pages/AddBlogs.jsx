import React from "react";
import '../components/AddEpisodes/addepisodes.css';
import Header from '../components/AddMembers/Header';
import FormInput from '../components/AddMembers/FormInput';
import UploadPhoto from '../components/AddMembers/UploadPhoto';
import Blogs from '../assets/Group (1).png'


const AddBlogs = () => {
    return (
        <form className="form">
            <Header />
            <section className="title">
                <img
                    loading="lazy"
                    src={Blogs}
                    alt=""
                    className="titleIcon"
                />
                <h1 className="titleText">ADD Blogs</h1>
            </section>


            <section className="formSection">
                <div className="formRow">
                    <FormInput label="Name" />
                    { }
                    <div className="formGroup">
                        <label htmlFor="date">Date</label>
                        <input
                            type="date"
                            id="date"
                            name="date"
                            style={{ padding: '5px', fontSize: '18px', width: '100%' }}
                        />
                    </div>
                </div>
            </section>


            <section className="formSection">
                <div className="formRow">
                    <FormInput label="Writer" />
                    <FormInput label="Country" />
                </div>
            </section>


            <section className="formSection" >
                <div className="formRow">

                    <UploadPhoto />
                </div>
            </section>




            <section className="formSection">
                <div className="formRow">
                <FormInput label="Text" style={{ height: '100px' }} />


                </div>
            </section>



            <button type="submit" className="submitButton">
                Submit
            </button>
        </form>
    );
};

export default AddBlogs;