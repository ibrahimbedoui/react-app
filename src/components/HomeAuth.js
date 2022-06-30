import React, { useState } from "react";
import { useGetAllProductsQuery } from "../features/ProductApi";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { wishlistAdd } from "../features/Wishlist/wishlistAuthSlice";

const HomeAuth = () => {
  const { data, error, isLoading } = useGetAllProductsQuery();
  const dispatch = useDispatch();
  const accessToken = localStorage.getItem("access")
    ? localStorage.getItem("access")
    : null;
  const [values, setValues] = useState({
    id: NaN,
    note: "1",
  });

  const handleWishlistAuth = (values) => {
    dispatch(wishlistAdd(values));
  };
  const navigate = useNavigate();

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
              return (
                <div key={product.id} className="product">
                  <h3 onClick={() => navigate(`/product-detail/${product.id}`)}>
                    {" "}
                    {product.title}
                  </h3>
                  <img
                    onClick={() => navigate(`/product-detail/${product.id}`)}
                    src={product.image}
                    alt={product.title}
                  />
                  <div className="details">
                    <span className="price">{product.store_price}dt</span>
                  </div>

                  <button
                    onClick={() => {
                      setValues({ ...values, id: product.id });
                      handleWishlistAuth(values);
                    }}
                  >
                    favoris
                  </button>
                </div>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
};

export default HomeAuth;
