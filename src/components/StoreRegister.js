import { useRef, useState, useEffect } from "react";
import "./StoreRegister.css";
import styled, { css } from "styled-components";
import axios from '../features/api/axios';
import AnimatedShapes from "./AnimatedShapes";
//import { Link, Redirect } from 'react-router-dom';

const REGISTER_URL = '/auth/users/';

const Container = styled.div`
  height: 100vh;
  overflow: hidden;
  position: relative;
`;

const Shape = css`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
`;

const IntoShape = styled.div`
  ${Shape}
  clip-path: polygon(67% 0, 100% 0%, 100% 100%, 55% 100%);
  background-color: #FFB6C1;
`;

function StoreRegister() {
  //data objects empty stored in initialValues
  const initialValues = { store_name: "", description:"", brand:""};
  //state and set state object of form values, takes in initial values object to load them there
  const [formValues, setFormValues] = useState(initialValues);
  //form errors
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    //need to put these in the then thingy
    setFormErrors(validate(formValues));
    try{
      const response= await axios.post(REGISTER_URL,
        formValues,
        {
          headers: {  'Content-Type': 'application/json'},
          withCredentials: true }
        );
        console.log(response.data);
        console.log(response.accessToken);
        setIsSubmit(true);
        //clear input fields 
    }catch (formErrors){
      if(!formErrors?.response) {
        setFormErrors('No Server Response');
      }
    }}
  

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors]);
  const validate = (values) => {
    const errors = {};
    if (!values.store_name) {
      errors.store_namee = "Ce champs est obligatoire";
    }  
    if (!values.description) {
        errors.description = "Ce champs est obligatoire";
      }
    if (!values.brand) {
      errors.brand = "Ce champs est obligatoire";
    }
    return errors;
  };
 

  return (
    <>
      <Container>
        <IntoShape/>
        <AnimatedShapes/>
        <div className="container">
      <form onSubmit={handleSubmit}>
        <h1>Créér votre boutique! </h1>
        <div className="ui divider"></div>
        <div className="ui form">
          <div className="field">
            <label>Nom: * </label>
            <input
              type="text"
              name="store_name"
              placeholder=""
              value={formValues.store_name}
              onChange={handleChange}
            />
          </div>
          <p>{formErrors.first_name}</p>
          <div className="field">
            <label>Description: *</label>
            <input
              type="text"
              name="description"
              placeholder=""
              value={formValues.description}
              onChange={handleChange}
            />
          </div>
          <p>{formErrors.last_name}</p>

          <div className="field">
            <label>Brand: *</label>
            <input
              type="text"
              name="brand"
              placeholder=""
              value={formValues.brand}
              onChange={handleChange}
            />
          </div>
          <p>{formErrors.brand}</p>
          <button className="fluid ui button blue">CONTINUER</button>
        </div>
      </form>
      </div>
      </Container>
      
  </>
  );
      }

export default StoreRegister;