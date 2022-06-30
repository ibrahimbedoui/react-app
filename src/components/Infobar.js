import React from "react";
import { useNavigate } from "react-router-dom";



export default function Infobar() {
  const navigate = useNavigate();

  return (
    <div className="container-infobar">
      
      <span className="link-1"onClick={() => navigate("/seller-register")}>Devenir vendeur !</span>
      <span className="link-2" onClick={() => navigate("/vendeur-info")}>| Comment vendre sur notre site</span>
    </div>
  );
}
