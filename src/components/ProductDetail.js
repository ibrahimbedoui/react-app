import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { productDetail } from "../features/singleproductSlice";
import { addToCart } from "../features/Cart/cartSlice";
import { addToWishlist } from "../features/Wishlist/wishlistSlice";
import { useParams } from "react-router-dom";
import ProductReview from "./ProductReview";
import { useNavigate } from "react-router-dom";
import jwtDecode from "jwt-decode";
import { FiEdit } from "react-icons/fi";

export default function ProductDetail() {
  const dispatch = useDispatch();
  let { id } = useParams();

  const navigate = useNavigate();
  const accessToken = localStorage.getItem("access")
    ? localStorage.getItem("access")
    : null;
  const userid = accessToken ? jwtDecode(accessToken).user_id : null;

  useEffect(() => {
    dispatch(productDetail(id));
  }, [id, dispatch]);

  const { items, images, store, a_prod } = useSelector(
    (state) => state.singleproduct
  );
  const handleAddToCart = (items) => {
    dispatch(addToCart(items));
  };

  const handleAddToWishlist = (items) => {
    dispatch(addToWishlist(items));
  };

  return (
    <div>
      {items ? (
        <div className="container-spd">
          <div className="product-detail-spd">
            {images && images.length > 0 ? (
              <div className="big-img-spd">
                <img className="big-img" src={images[0].image} alt="image1" />
              </div>
            ) : (
              <div></div>
            )}
            <div className="box-spd">
              <div className="row-spd">
                <h2>{items.title} </h2>
                <span onClick={() => navigate(`/boutique/${items.store}`)}>
                  {" "}
                  {items.store}
                </span>
                <span>{items.unit_price}dt</span>
              </div>
              <div className="colors-spd">
                {a_prod.map((item) => (
                  <button style={{ backgroundColor: item?.color}}></button>
                ))}
              </div>
              <div className="colors-spd">
                {a_prod.map((item) => (
                  <button>{item?.size}</button>
                ))}
              </div>
              <p className="spd-p">{items.description}</p>
              {images && images.length > 0 ? (
                <div className="thumb-spd">
                  <img src={images[0]?.image} alt="image0" />
                   <img src={images[1]?.image} alt="image1"/>
                                        <img src={images[2]?.image} alt="image2"/>
                                        <img src={images[3]?.image} alt="image3"/> 
                </div>
              ) : (
                <div></div>
              )}
              <button
                className="cart-spd"
                onClick={() => handleAddToCart(items)}
              >
                {" "}
                Ajouter au panier
              </button>
              <button
                className="wishlist-spd"
                onClick={() => handleAddToWishlist(items)}
              >
                {" "}
                Ajouter au wishlist
              </button>
            </div>
          </div>
          <ProductReview />
          <div className="reviews-container">
            {items?.reviews ? (
              <div className="second-reviews-container" key={items.reviews.id}>
                {items.reviews.map((review) => (
                  <>
                    <h1>{review.name}</h1>{" "}
                  
                    <span>{review.date}</span>
                    <div>{review.description}</div>
                  </>
                ))}
              </div>
            ) : (
              <div>ce produit n'a pas de reviews ! </div>
            )}
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
}
