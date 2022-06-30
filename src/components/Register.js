import { useState, useEffect } from "react";
import "./Registration.css";
import styled from "styled-components";
import { ImFacebook2 } from "react-icons/im";
import { useDispatch, useSelector } from "react-redux";
//import { registerUser } from "../features/auth/authSlice";

import { useNavigate } from "react-router-dom";

const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

const Container = styled.div`
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
  color: black;
`;

/* const handleSubmit = async (e) => {
    e.preventDefault();
    //need to put these in the then thingy
    formValues.username = formValues.email;
    formValues.type = "1";
    setFormErrors(validate(formValues));
    try {
      const response = await axios.post("/users/add", formValues, {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      });
      console.log(response.data);
      console.log(response.accessToken);
      setIsSubmit(true);
      //clear input fields
    } catch (formErrors) {
      if (!formErrors?.response) {
        setFormErrors("No Server Response");
      } else if (formErrors.response?.status === 400) {
        setFormErrors("Cet email est déjà utilisé!");
      }
    }
  };

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors]);
  const validate = (values) => {
    const errors = {};
    if (!values.first_name) {
      errors.first_name = "Le nom est obligatoire";
    }
    if (!values.last_name) {
      errors.last_name = "Le prénom est obligatoire";
    }
    if (!values.email) {
      errors.email = "L'email est obligatoire !";
    } else if (!EMAIL_REGEX.test(values.email)) {
      errors.email = "Tapez un email valide !";
    }
    if (!values.password) {
      errors.password = "Le mot de passe est obligatoire!";
    } else if (!PWD_REGEX.test(values.password)) {
      errors.password =
        "Votre mot de passe doit contenir au moins 1 majuscule, 1 minuscule, 1 chiffre, 1 caractère spécial et une longueur d'au moins 10";
    } else if (values.re_password && values.re_password !== values.password) {
      errors.re_password =
        "Ce champs doit être identique à votre mot de passe!";
    }
    return errors;
  };
  {auth.regis}
  */

function Register() {
  const [user, setUser] = useState({
    first_name: "",
    last_name: "",
    username: "",
    type: "1",
    email: "",
    password: "",
    re_password: "",
  });
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSumbit] = useState(false);

  const navigate = useNavigate();
  const auth = useSelector((state) => state.auth);

  //not letting a logged in person access the registration route

  useEffect(() => {
    if (isSubmit==="true") {
      navigate("/");
    }
  }, [isSubmit, navigate]);

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


  //const dispatch = useDispatch();

  return (
    <>
      <Container>
  
        <hr style={{ size: "5px" }}></hr>
        <form  onSubmit={handleSubmit}>
          <div style={{padding:"30px"}} className="ui form">
            <h1>S'inscrire avec votre e-mail: </h1>

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
             
          <button className="button-registration">S'INSCRIRE</button>

            
        
          </div>
        </form>
      </Container>
    </>
  );
}

export default Register;
