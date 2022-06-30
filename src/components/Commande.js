import React from "react";
import { sendOrder } from "../features/Cart/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import {
  getTotals,
} from "../features/Cart/cartSlice";
import { useNavigate } from "react-router-dom";
export default function Commande({ fermer }) {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleCommande = () => {
    dispatch(sendOrder(cart));
  };

  return (
    <>
      <div className="commande-popup">
        <div className="commande-popup-inner">
       
          <h1>Votre commande: </h1>
          <div className="cart-items">
            {cart.cartItems?.map((cartItem) => (
              <div className="cart-item" key={cartItem.id}>
                <div className="cart-product">
                  <img
                    src={cartItem.images[0].image}
                    alt="image 1"
                    style={{ width: "200px", height: "300px" }}
                  />
                  <div>
                    <h3>{cartItem.title}</h3>
                    <p>taille: {cartItem.a_prod[0].size}</p>
                    <p style={{ color: "black" }}>{cartItem.description}</p>
                    <div className="cart-product-price">
                      {cartItem.unit_price}dt
                    </div>

                    <div className="count">{cartItem.cartQuantity}</div>
                  </div>
                  <div className="cart-product-total-price">
                    {cartItem.unit_price * cartItem.cartQuantity}dt
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="cart-summary">
            <div className="cart-checkout">
              <div className="subtotal">
                <span>Sous-total</span>
                <span className="amount">{cart.cartTotalAmount}dt</span>
              </div>
            </div>
          </div>
          <button  style={{margin:"5px"}}onClick={() => handleCommande(cart)}>COMMANDER</button>
          <button style={{marginLeft:"800px"}} onClick={() => navigate("/Cart")}>MODIFIER MA COMMANDE</button>
        </div>

      </div>
    </>
  );
}
