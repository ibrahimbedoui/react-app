import { useSelector, useDispatch } from "react-redux";
import {  useEffect } from "react";
import { Link } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";
import { AiOutlineArrowLeft } from "react-icons/ai";
import {
  addToCart,
  decreaseCart,
  removeFromCart,
  clearCart,
  getTotals,
} from "../features/Cart/cartSlice";
import { useNavigate } from "react-router-dom";
import CartImages from "../components/CartImages";



/*we want to check if the cart is empty we show another interface
if not, we show the products, so we need to use the useSelector
hook to access the state of the cart, it's a hook from 
react redux */
const Cart = () => {
  /*we access the state of the cart using the selector hook */
 
  const cart = useSelector((state) => state.cart);
 



  const {userLoaded} = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  /* this will be called whenever our component renders it's for
  calculating the total and total quantity, and also whenever any chance happens*/
  useEffect(() => {
  
    dispatch(getTotals());

  }, [cart, dispatch]);


 
  const handleRemoveFromCart = (cartItem) => {
    dispatch(removeFromCart(cartItem));
  };
  const handleDecreaseCart = (cartItem) => {
    dispatch(decreaseCart(cartItem));
  };
  const handleIncreaseCart = (cartItem) => {
    dispatch(addToCart(cartItem));
  };
  const handleClearCart = () => {
    dispatch(clearCart());
  };


  return (
    <div className="cart-container" style={{padding:"100px"}}>
      <h2>Panier</h2>
      {cart.cartItems.length === 0 ? (
        <div className="cart-empty">
          <p>Votre panier est vide! </p>
          <div className="start-shopping">
            <Link to="/">
              <FiShoppingCart style={{ width: "20", height: "20" }} />
              <span>Parcourez notre site et découvrez nos produits!</span>
            </Link>
          </div>
          {/*<div className="panier-images">
            <img src={CartImages.img1} alt="image1" width="300px" height="600px"/>
            <img src={CartImages.img2} alt="image2"/>
            <img src={CartImages.img3} alt="image3"/>
            <img src={CartImages.img4} alt="image4"/>

      </div>*/}
        </div>
      ) : (
        <div>
          <div className="titles">
            <h3 className="product-title">Produit</h3>
            <h3 className="price">Prix</h3>
          </div>
          <div className="cart-items">
            {cart.cartItems?.map((cartItem) => (
              <div className="cart-item" key={cartItem.id}>
                <div className="cart-product">
                  <img src={cartItem.images[0].image} alt="image 1" style={{width:"200px", height:"300px"}} />
                  <div>
                    <h3>{cartItem.title}</h3>
                    <div className="colors-spd">
                              {cartItem.a_prod.map((item)=>(
                                  <button
                                  style={{backgroundColor: item?.color}}>
                                  </button>
                              ))}
                                
                            </div>
                    <p>taille: {cartItem.a_prod[0].size}</p>
                    <p style={{color:"black"}}>{cartItem.description}</p>
                    <button onClick={() => handleRemoveFromCart(cartItem)}>
                      {" "}
                      Supprimer{" "}
                    </button>
                    <div className="cart-product-price">
                      {cartItem.unit_price}dt
                    </div>
                    <div className="cart-product-quantity">
                      <button onClick={() => handleDecreaseCart(cartItem)}>
                        -
                      </button>
                      <div className="count">{cartItem.cartQuantity}</div>
                      <button onClick={() => handleIncreaseCart(cartItem)}>
                        +
                      </button>
                    </div>
                  </div>
                  <div className="cart-product-total-price">
                    {cartItem.unit_price * cartItem.cartQuantity}dt
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="cart-summary">
            <button className="clear-cart" onClick={() => handleClearCart()}>
              Vider le panier
            </button>
            <div className="cart-checkout">
              <div className="subtotal">
                <span>Sous-total</span>
                <span className="amount">{cart.cartTotalAmount}dt</span>
              </div>
              {userLoaded ?  (<> 
                <Link to="/commande"> 
                <button>COMMANDER</button>
                </Link>
                
                </>
              ) : (
                <button onClick={() => navigate("/login")}>Se connecter</button>
              )}

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

export default Cart;
