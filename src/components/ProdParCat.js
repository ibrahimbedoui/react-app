import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { addToWishlist } from "../features/Wishlist/wishlistSlice";
import {useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { productByCol, getFiltered } from '../features/productsSlice';



export default function ProdParCat() {
    const dispatch = useDispatch();
  let { id } = useParams();

  const [values, setValues] = useState({
    collection_id:id,
    unit_price_gt:"",
    unit_price_lt:"",
  })

  useEffect(() => {
    dispatch(productByCol(id));
  }, [id, dispatch]);

  const navigate = useNavigate();
  const products = useSelector((state) => state.products)
  console.log(products)
  const handleAddToWishlist = (product) => {
    dispatch(addToWishlist(product));
  };

  const handleSubmit = async (e) => {
   
    e.preventDefault();
    dispatch(getFiltered(values))}

  return (
    <>
       {products.items.results? (
          <> 

          <div className="products">
          <form onSubmit={handleSubmit}>
        <div className="filter">
          <div className="filter-sort">
            <h1>Filtrer par:</h1>
            <span>Prix:</span>
            <br/>
            <input
              type="text"
              placeholder="Plus que"
              name="unit_price_gt"
              onChange={(e) => setValues({...values, unit_price_gt: e.target.value})}
            />

            <input
              type="text"
              placeholder="Moins que"
              name="unit_price_lt"
              
              onChange={(e) => setValues({...values, unit_price_lt: e.target.value})}
            />
              <button style={{marginLeft:"10px"}}>FILTRER</button>
           
          </div>
        </div>
      </form>
      <div></div>
            
            {products?.items.results.map((product) => {
              return (
                <div key={product.id} className="product">
                  <h3 onClick={() => navigate(`/product-detail/${product.id}`)} >  {product.title}</h3>
                  <img  onClick={() => navigate(`/product-detail/${product.id}`)}src={product.images[0]?.image} alt={product.title} />
                  <div className="details">
                   
                    <span className="price">{product.store_price}dt</span>
                  </div>
                     <button onClick={() => handleAddToWishlist(product)}>
                     favoris
                   </button> 
                </div>
              );
            })}
          </div>
        </>
  ) : <>
  <h3>Une erreur est survenue ! </h3>
  </>
}</> 
        )
}
