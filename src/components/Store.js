import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {getStore } from "../features/Store/StoreSlice";
import Storereview from "./Storereview";
import {


  FiHeart

} from "react-icons/fi";
import { addFavStores} from "../features/FavStores/favstoresSlice"


export default function Store() {

  const dispatch = useDispatch();
  const { id } = useParams();
  const store= useSelector((state) => state.store);
  const accessToken = localStorage.getItem("access") ? localStorage.getItem("access") : null;
 
  useEffect(() => {
    dispatch(getStore(id));
  }, [id, dispatch]);

  const [values, setValues] = useState({
    sid: NaN,
    note: "1",
  });



  const handleAddToStoreFavs  = (values) => {
    dispatch( addFavStores(values));
};


  return (
    <>
    {store.storeLoaded ? (
    <div className="store-container">
      <div className="another-store-container" style={{display:"flex", flexDirection:"column", alignItems:"center"}}>
        <h1 className="store-name" style={{color: "#1db5c0", marginBottom:"20px"}}>
          {store?.store_name}
        </h1>
        <div className="store-add-to-favs">
         <button style={{backgroundColor:"#1db5c0" }} onClick={() => {
                setValues({ ...values, sid: store.response.user });
                handleAddToStoreFavs(values);
              }}>
                Ajouter aux favoris 
              </button> 
          
          
      
          </div>
        <div className="store-image-container">
        <img src={store?.StoreImage[0]?.store_image} alt="image"/>
        </div>
        <div className="store-description-container">
          <h3>Sur cette boutique:</h3>
          <div className="store-description">
            {store?.description}
          </div>
        </div>
        <span>{store.brand}</span>
        <Storereview/>
        <div className="store-reviews-container">
                            {store?.reviews? (
                        <div className="second-reviews-container" key={store.reviews.id}>
                        {store.reviews.map((review)=>(
                            <> 
                            <h1>{review.name}</h1>
                            <span>{review.date}</span>
                            <div>{review.description}</div>
                            </>
                              ))}
                        </div>
                            ) : <div>cette boutique n'a pas de reviews ! </div> }
        </div>

      </div>
    </div>
      ) : <span> une erreur est survenue </span> } 
    </>
  );
}
