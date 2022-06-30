import React from "react";
import { useRef, useState, useEffect, useContext } from "react";
import "./Login.css";
import styled, { css } from "styled-components";
import {ImFacebook2} from "react-icons/im";

import AnimatedShapes from "./AnimatedShapes";

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




const Login = () => {

  //user ref to set the focus on the user input when the component loads
  const userRef = useRef();
  // error ref to set the focus on the error + screen reader for assistive technology
  const errRef = useRef();
  //state for the email
  const [email, setEmail] = useState('');
  // password state
  const [password, setPassword] = useState('');
  //error message state
  const [errMsg, setErrMsg] = useState('');
  // success state when we get advanced, if the procedure is successful we can route to another page
  const [success, setSuccess] = useState(false);
  //set the focus on the first input when the component loads
  useEffect(() => {
    userRef.current.focus();
  }, []);
  // empty out any error messages if the user changes the inputs
  useEffect(() => {
    setErrMsg("");
  }, [email, password]);

  {
    /*the event gets passed the event automatically*/
  }

    
    {
      /*we can clear out the components once the form is submitted, we can do it bcs they're controlled components */
    }
    
 

  return (
    <>
     <Container>

<div className="container">

<IntoShape/>
<AnimatedShapes/> 
      {success ? (
        <section>
          <h1>Bienvenue!</h1>
          <br />
          <p>
            {/*lien de redirection vers la page d'accueil when the login is successful*/}
            <a href="#" />
          </p>
        </section>
      ) : (
        <section>
          <p
            ref={errRef}
            className={errMsg ? "errmsg" : "offscreen"}
            aria-live="assertive"
          >
            {errMsg}
          </p>
          <h1>SE CONNECTER</h1>
          <form >
            <div className="ui divider"></div>
            <div className="ui form">
              <div className="field">
                
                <input
                style={{width:"400px"}}
                  type="text"
                  id="email"
                  placeholder="Email:"
                  ref={userRef}
                  autoComplete="off"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  required
                />
              </div>
              <div className="field">
                
                <input
                style={{width:"400px"}}
                  type="password"
                  id="password"
                  placeholder="Mot de passe"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  required
                />
              </div>
             
      
              <br />
              {/*we have one button only so we don't have to set a state, the submitting happens from this button automatically*/}
              <button style={{marginBottom:"10px"}}>SE CONNECTER</button>
            
            
            </div>
          </form>
        </section>
      )}
      </div>
      </Container>
    </>
  );
};

export default Login;