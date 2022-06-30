import React from "react";
import { useGetAllProductsQuery } from "../features/ProductApi";
import { useDispatch } from "react-redux";
import { addToCart } from "../features/Cart/cartSlice";

const Mappingproducts = () => {
  const { data, error, isLoading } = useGetAllProductsQuery();
  const dispatch = useDispatch();
  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };
  
  return (
    <div className="home-container">
      {isLoading ? (
        <p>loading...</p>
      ) : error ? (
        <p>une erreur est survenue</p>
      ) : (
        <>
          <h2>tous les produits</h2>
          <div className="products">
            {data?.results.map((product) => {
              return(
              <div key={product.id} className="product">
                <h3>{product.title}</h3>
                <img src={product.image} alt={product.title} />
                <div className="details">
                  <span>{product.description}</span>
                  <span className="price">{product.store_price}dt</span>
                </div>
                <button onClick={() => handleAddToCart(product)}>
                  Ajouter au panier
                </button>
              </div>);
            })}
          </div>
        </>
      )}
    </div>
  );
};

export default Mappingproducts;
