import { useRef, useState, useEffect } from "react";
import "./Registration.css";
import styled, { css } from "styled-components";

import AnimatedShapes from "./AnimatedShapes";
import {ImFacebook2} from "react-icons/im"
import { Link, useNavigate} from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";

const REGISTER_URL = '/auth/users/';
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

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
const COntainer = styled.div`
  font-family: "lato";
`;

const WrapperG = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Title = styled.div`
  font-size: 30px;
  margin: 25px;
`;
const STitle = styled.div`
  font-size: 20px;
  margin-bottom: 10px;
`;

const DP = styled.p`
  font-size: 14px;
  color: black;`

function SellerRegister() {
  const [user, setUser] = useState({
    first_name: "",
    last_name: "",
    username: "",
    type: "2",
    email: "",
    password: "",
    re_password: "",
  });
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSumbit] = useState(false);

  const navigate = useNavigate();
  const seller = useSelector((state) => state.seller);

  
    const handleSubmit = (e) => {
      e.preventDefault();
      setFormErrors(validate(user));
      setIsSumbit(true);
    };

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(user);
    }
  }, [formErrors]);

 const validate = (user) => {
    const errors = {};
    if (!user.first_name) {
      errors.first_name = "Le nom est obligatoire";
    }
    if (!user.last_name) {
      errors.last_name = "Le prénom est obligatoire";
    }
    if (!user.email) {
      errors.email = "L'email est obligatoire !";
    } else if (!EMAIL_REGEX.test(user.email)) {
      errors.email = "Tapez un email valide !";
    }
    if (!user.password) {
      errors.password = "Le mot de passe est obligatoire!";
    } else if (!PWD_REGEX.test(user.password)) {
      errors.password =
        "Votre mot de passe doit contenir au moins 1 majuscule, 1 minuscule, 1 chiffre, 1 caractère spécial et une longueur d'au moins 10";
    } else if (user.re_password && user.re_password !== user.password) {
      errors.re_password =
        "Ce champs doit être identique à votre mot de passe!";
    }
    return errors;
  };

 

  return (
    <>
   <Container>

        <div className="container">
       
        <IntoShape/>
        <AnimatedShapes/> 
        
          <hr style={{ size: "5px" }}></hr>
      <form onSubmit={handleSubmit}>
        <h1>Créér un compte vendeur </h1>

        <input
              type="text"
              name="last_name"
              placeholder="Nom: *"
              onChange={(e) => {
                setUser({ ...user, last_name: e.target.value });
              }}
            />
          <p>{formErrors.last_name}</p>
         
          <input
              type="text"
              name="first_name"
              placeholder="Prénom: *"
              onChange={(e) => {
                setUser({ ...user, first_name: e.target.value });
              }}
            />
        
          <p>{formErrors.first_name}</p>

          

          <input
              type="text"
              name="email"
              placeholder="Email: *"
              onChange={(e) => {
                setUser({ ...user, email: e.target.value });
              }}
            />
     
          <p>{formErrors.email}</p>
         
          <input
              type="password"
              name="password"
              placeholder="Mot de passe: *"
              onChange={(e) => {
                setUser({ ...user, password: e.target.value });
              }}
            />
          <p>{formErrors.password}</p>
 
          <input
              type="password"
              name="re_password"
              placeholder="Confirmer le mot de passe: *"
              onChange={(e) => {
                setUser({ ...user, re_password: e.target.value });
              }}
              required
            />
         
          <p>{formErrors.re_password}</p>
          
          <button >CONTINUER</button>
          
        
      </form>
      </div>
      </Container>
      
  </>
  );
      }

export default SellerRegister;