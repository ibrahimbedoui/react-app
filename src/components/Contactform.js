import React, { useState, useEffect } from "react";
import "../app.css";
import axios from '../api/axios';

const Contactform = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [loader, setLoader] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoader(true);

    try{ 
      const response = await axios.post(CONTACT_URL, {name, email, message}, {
        headers: { 'Content-Type': 'application/json'},
        withCredentials: true
      }).then(() => {
        setLoader(false);
        alert("Votre message a été envoyé ! ");
      }).catch((error) => {
        alert(error.message);
        setLoader(false);
      });

    setName("");
    setEmail("");
    setMessage("");
  };
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h1>Contactez nous</h1>

      <label>Name</label>
      <input
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <label>Email</label>
      <input
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <label>Message</label>
      <textarea
        placeholder="Message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      ></textarea>

      <button
        type="submit"
        style={{ background: loader ? "#ccc" : " rgb(2, 2, 110)" }}
      >
        Submit
      </button>
    </form>
  );
};

export default Contactform;