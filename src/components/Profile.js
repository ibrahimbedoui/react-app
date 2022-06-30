import React, { useState, useEffect } from "react";
import { FiEdit } from "react-icons/fi";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { CgSmileSad } from "react-icons/cg";
import {FiUser} from "react-icons/fi";
import "../App.css"
import { getMe } from "../features/auth/authSlice";

function Profile() {
  const dispatch = useDispatch();
const access = localStorage.getItem("access");
const { userLoaded } = useSelector((state) => state.auth)
const auth = useSelector((state) => state.auth)

  useEffect(() => {
    if (userLoaded === "true") {
      dispatch(getMe)
    }
  }, [userLoaded, dispatch]);
  
  return (
    <>
      {userLoaded === "" ? (
        <>
          <div className="cart-empty" style={{padding:"100px"}}>
            <FiUser style={{fontSize:"50px", paddingBottom:"10px"}}/>
            <p>Vous n'avez pas encore de compte! </p>
            <div className="start-shopping">
              <Link to="/signup">
                <CgSmileSad style={{ width: "20", height: "20" }} />
                <span>
                  Inscrivez vous et parcourez notre variété de produits!
                </span>
              </Link>
            </div>
          </div>
        </>
      ) : (
        <>
        
          <div className="profile-wrapper">
            <div className="profile-flex-box" style={{marginTop:"100px"}}>
              <h1 className="title1-profile">Vos informations: </h1>
              {/*a modification icon would be here, if you click on it it redirects you to the modification view */}
              <span className= "title2-profile"style={{ cursor: "pointer" }}>
                Editer vos informations
                <Link to="/editprofile" style={{ textDecoration: "none" }}>
                  <FiEdit />
                </Link>
              </span>
              <div className="profile-tel">
                <span>Numéro de téléphone 1:</span>
                <br />
                <span>{auth?.phone1}</span>
              </div>
              <div className="profile-tel">
                <span>Numéro de téléphone 2:</span>
                <br />
                <span>{auth?.phone2}</span>
              </div>
              <div className="profile-bd">
                <span>Date de naissance: </span>
                <br />
                <span>{auth?.birth_date}</span>
              </div>
              <div className="profile-code-postal">
                <span>Code postale:</span>
                <br />
                <span>{auth?.zipcode}</span>
              </div>
              <div className="profile-rue">
                <span>Rue:</span>
                <br />
                <span>{auth?.street}</span>
              </div>
              <div className="profile-état">
                <span>Cité:</span>
                <span>{auth.city}</span>
              </div>
              <div className="buttons-1" style={{display:"flex", flexDirection:"row"}}> 
              <Link to="/Profile-vendeurs-favoris">
          <button className="profile-vendeurs">Vendeurs favoris</button>
        </Link>
        <Link to="/Profile-commandes">
          <button className="profile-commandes">Mes commandes</button>
        </Link>
        </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default Profile;