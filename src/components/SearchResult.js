import React, {useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { searchFetch } from '../features/searchSlice';
import { useNavigate } from 'react-router-dom';
import { addToWishlist } from '../features/Wishlist/wishlistSlice';

export default function SearchResult() {
  const navigate = useNavigate();
let {query} = useParams();
const dispatch = useDispatch();
useEffect(() => {
   
  dispatch(searchFetch(query))
 
}, [query, dispatch]);
const search = useSelector((state) => state.search)
console.log(search)
const handleAddToWishlist = (product) => {
  dispatch(addToWishlist(product));
};



  return (
    <> 
     <div className="home-container">
    <div className="products">
            {search?.items?.map((product) => {
              return (
                <div key={product.id} className="product">
                  <h3 onClick={() => navigate(`/product-detail/${product.id}`)} >  {product.title}</h3>
                  <img onClick={() => navigate(`/product-detail/${product.id}`)}src={product.images[0]?.image} alt={product.title} />
                  <div className="details">
                   
                    <span className="price">{product.store_price}dt</span>
                  </div>
                     <button onClick={() => handleAddToWishlist(product)}>
                       
                     favoris
                   </button> 
                </div>
              );
            })}</div>
            </div>
    </> 
  )
}
