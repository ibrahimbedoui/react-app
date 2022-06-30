import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import "../App.css";
import authSlice from "../features/auth/authSlice";
import { updateProfile } from "../features/profileSlice";

export default function ProfileEdit() {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  const [profile, setProfile] = useState({
    user: auth.uuid,
    phone1: "",
    phone2: "",
    birth_date: "",
    zipcode: "",
    street: "",
    city: "",
  });
  const [submit, setIsSubmit] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmit(true);
    dispatch(updateProfile(profile));
  };

  return (
    <>
      <form className="profile-edit" onSubmit={handleSubmit}>
        <h1>Modifier vos informations: </h1>
        <div className="profile-edit-small">
          <input
          style={{width:"250px", marginRight:"10px"}}
            type="tel"
            name="phone1"
            placeholder="Numéro de téléphone * "
            onChange={(e) => {
              setProfile({ ...profile, phone1: e.target.value });
            }}
            pattern="[0-9]{8}"
            required
          />

          <input
          style={{width:"250px"}}
            type="tel"
            name="phone2"
            placeholder="Numéro de téléphone 2"
            onChange={(e) => {
              setProfile({ ...profile, phone2: e.target.value });
            }}
            
          />
        </div>

        <input
        style={{marginTop:"15px", width:"250px",height:"30px"}}
          type="date"
          name="birthdate"
          placeholder="Date de naissance"
          onChange={(e) => {
            setProfile({ ...profile, birthdate: e.target.value });
          }}
        />

        <input
          type="text"
          name="zipcode"
          placeholder="Code postal"
          onChange={(e) => {
            setProfile({ ...profile, zipcode: e.target.value });
          }}
          required
        />

        <input
          type="text"
          name="street"
          placeholder="Rue"
          onChange={(e) => {
            setProfile({ ...profile, street: e.target.value });
          }}
          required
        />

        <input
          type="text"
          name="city"
          placeholder="cité"
          onChange={(e) => {
            setProfile({ ...profile, city: e.target.value });
          }}
          required
        />

        <button
          style={{
            backgroundColor: "black",
            padding: "20px 40px",
            marginTop: "10px",
            marginBottom: "30px",
            color: "white",
            border: "none",
          }}
        >
          ENREGISTRER
        </button>
        {submit === true ? <p> Vos données ont été mis à jours avec succes !</p> : <p></p> } 
      </form>
    </>
  );
}
