import React from "react";
import { useRef, useState, useEffect, useContext } from "react";
import AuthContext from "../context/AuthProvider";
import "./Login.css";
import axios from "../api/axios";
//this url matches the url of the database
const LOGIN_URL = "/auth/jwt/create/";

const Login = () => {
  const { setAuth } = useContext(AuthContext);
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
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
        const response = await axios.post(LOGIN_URL, {email, password}, {
            headers: { 'Content-Type': 'application/json'},
            withCredentials: true
        }
        );
      console.log(response?.data);
      const accessToken = response?.data?.accessToken;
      setAuth({email, password, accessToken})
      setEmail('');
      setPassword('');
      setSuccess(true);
    } catch (err) {
        if (!err?.response) {
            setErrMsg('No server Response');
        }else if (err.response?.status === 400) {
            setErrMsg('Email ou mot de passe manquant');
        }else if (err.response?.status === 401) {
            setErrMsg('Les informations ne correspondent à aucun compte!');
        }else {
            setErrMsg('Login échoué');
        }
        errRef.current.focus();

    }
    
    {
      /*we can clear out the components once the form is submitted, we can do it bcs they're controlled components */
    }
    
  };

  return (
    <>
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
          <form onSubmit={handleSubmit}>
            <div className="ui divider"></div>
            <div className="ui form">
              <div className="field">
                <label> Email: </label>
                <input
                  type="text"
                  id="email"
                  placeholder=""
                  ref={userRef}
                  autoComplete="off"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  required
                />
              </div>
              <div className="field">
                <label>Mot de passe: </label>
                <input
                  type="password"
                  id="password"
                  placeholder=""
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  required
                />
              </div>
              {/*<input type="checkbox" id="stayon" name="stayon" value="stayon" />*/}
              <label for="stayon"> Rester connecté </label>
              <span style={{ textDecoration: "underline", fontSize: "13px" }}>
                MOT DE PASSE OUBLIÉ ?
              </span>
              {/*<span className="stylingofthespan">
put the router link in the #
<a href="#">Mot de passe oublié?</a>
</span>*/}

              <br />
              {/*we have one button only so we don't have to set a state, the submitting happens from this button automatically*/}
              <button>SE CONNECTER</button>
            </div>
          </form>
        </section>
      )}
    </>
  );
};

export default Login;