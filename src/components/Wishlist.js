import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { FiHeart } from "react-icons/fi";
import { AiOutlineArrowLeft } from "react-icons/ai";
import {  removeFromWishlist, clearwishlist, getTotals1} from "../features/Wishlist/wishlistSlice";

/*we want to check if the cart is empty we show another interface
if not, we show the products, so we need to use the useSelector
hook to access the state of the cart, it's a hook from 
react redux */
const Wishlist = () => {
  /*we access the state of the cart using the selector hook */
  const wishlist = useSelector((state) => state.wishlist);
  const dispatch = useDispatch();
  /* this will be called whenever our component renders it's for
  calculating the total and total quantity, and also whenever any chance happens*/
  useEffect(() => {
    dispatch(getTotals1());
  }, [wishlist, dispatch]);

  const handleRemoveFromWishlist = (wishlistItem) => {
    dispatch(removeFromWishlist(wishlistItem));
  };
  
  const handleClearWishlist = () => {
      dispatch(clearwishlist());
  }
  return (
    <div className="cart-container" style={{padding:"100px"}}>
      <h2>Liste des souhaits</h2>
      {wishlist.wishlistItems.length === 0 ? (
        <div className="cart-empty">
          <p>Votre liste de souhaits est vide! </p>
          <div className="start-shopping">
            <Link to="/">
              <FiHeart style={{ width: "20", height: "20" }} />
              <span>Parcourez notre site et découvrez nos produits!</span>
            </Link>
          </div>
        </div>
      ) : (
        <div>
          <div className="titles">
            <h3 className="product-title">Produit</h3>
            <h3 className="price">Prix</h3>
          </div>
          <div className="cart-items">
            {wishlist.wishlistItems?.map((wishlistItem) => (
              <div className="cart-item" key={wishlistItem.id}>
                <div className="cart-product">
                  <img src={wishlistItem.images[0]?.image} alt={wishlistItem.title} style={{width:"200px", height:"300px"}} />
                  <div>
                    <h3>{wishlistItem.title}</h3>
                    <p style={{color:"black"}}>{wishlistItem.description}</p>
                    <button onClick={() => handleRemoveFromWishlist(wishlistItem)}>
                      {" "}
                      Supprimer{" "}
                    </button>
                    <div className="cart-product-price">
                      {wishlistItem.unit_price}dt
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="cart-summary">
            <button className="clear-cart" onClick={() => handleClearWishlist()}>Vider la liste des souhaits</button>
            <div className="cart-checkout">
              <div className="subtotal">
               
               
              </div>
              <button>COMMANDER</button>
              <div className="continue-shopping">
                <Link to="/">
                  <AiOutlineArrowLeft style={{ width: "20", height: "20" }} />
                  <span>Poursuivre votre shopping</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Wishlist;
