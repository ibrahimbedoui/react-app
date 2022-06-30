import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { destroyFavStores } from "../features/FavStores/favstoresSlice";

export default function FavoriteStores() {
  const favstores = useSelector((state) => state.favstores);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleRemoveFromFavStores = (favstoresItem) => {
    dispatch(destroyFavStores(favstoresItem));
  };
let fav =[];
favstores.favstoresItems.map((items) => {
  fav.push({
    "id": items.id,
    "store": items.store,
    "note": items.note,
  });
  console.log(fav);
});

let fav1 = [];
fav.map((boutique) => {
  fav1.push({
    "user": boutique.store.user,
    "store_name": boutique.store.store_name
  });
  console.log(fav1)
});


  return (
    <div className="home-container" style={{marginTop:"100px", marginBottom:"100px"}}>
      <div className="flex-stores" style={{display:"flex", flexDirection:"column", alignItems:"center"}}> 
      <h2>Vos boutiques favorites!</h2>
      {favstores.favstoresItems.length === 0 ? (
        <div className="favstores-empty">
          <p>Vous n'avez aucune boutique favorite! </p>
          <div className="start-shopping">
            <Link to="/">
              <span>Parcourez notre site et découvrez nos produits!</span>
            </Link>
          </div>
        </div>
      ) : (
        <div className="products">
          {fav1.map((boutique) => (
            <div className="product" key={boutique.user}>
              <div className="details">
                <div>
                  <h3
                    onClick={() => navigate(`/boutique/${boutique.user}`)}
                  >
                    {boutique.store_name}
                  </h3>
                  
                </div>
                <button
                  onClick={() => handleRemoveFromFavStores(boutique)}
                >
                  {" "}
                  Supprimer{" "}
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
      </div>
    </div>
  );
}
