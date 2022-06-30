import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { FiHeart } from "react-icons/fi";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { getWishlist, wishlistDestroy} from "../features/Wishlist/wishlistAuthSlice";
import { useNavigate } from "react-router-dom";


const WishlistAuth = () => {
  const wishlistAuth = useSelector((state) => state.wishlistAuth);
  const dispatch = useDispatch();
 const navigate = useNavigate();
 
 useEffect(() => {
  
    dispatch(getWishlist());

  }, [ dispatch]);

  const handleRemoveFromWishlist = (wishlistItem) => {
    dispatch(wishlistDestroy(wishlistItem));
  };
  /*const handleGetWishlistAuth = () =>{
      dispatch(getWishlist());
  }*/

  return (
    <div className="cart-container" style={{padding:"100px"}}>
      <h2>Liste des souhaits</h2>
      {wishlistAuth.wishlistItems.length === 0 ? (
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
            {wishlistAuth.wishlistItems?.map((wishlistItem) => (
              <div className="cart-item" key={wishlistItem.id}>
                <div className="cart-product">
                  <img src={wishlistItem?.products?.images[0]?.image} alt={wishlistItem.products.title} style={{width:"200px", height:"300px"}} />
                  <div>
                    <h3>{wishlistItem?.products.title}</h3>
                    <p>{wishlistItem?.products.price_with_promotion}</p>
                    <button onClick={() => {handleRemoveFromWishlist(wishlistItem) }}>
                      {" "}
                      Supprimer{" "}
                    </button>
                    <div className="cart-product-price">
                      {wishlistItem.products.unit_price}dt
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="cart-summary">
            <div className="cart-checkout">
              <div className="subtotal">
              </div>
              <button onClick={() => navigate("/commande")}>COMMANDER</button>
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

export default WishlistAuth;
