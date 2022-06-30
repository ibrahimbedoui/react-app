import React , { useEffect}from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getOrders } from '../features/OrderSlice';
import { Link } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";

export default function VoirCommandes() {
    const dispatch = useDispatch();
    const navigate= useNavigate();
    const commandes = useSelector((state) => state.order)

    useEffect(() => {
        dispatch(getOrders());
    }, [dispatch])
    

    let o1= [];
    let o2= [];
    let o3= [];
   /* commandes.response.map((item) => {
        o1.push({
          "id": item.id,
          "customer": item.customer,
          "placed_at": item.placed_at,
          "payement_status": item.payement_status,
          "items": item.items,
           "total_price": item.total_price,
           "total_price_for_secial_clients": item.total_price_for_secial_clients
        });
        console.log(o1);
    });
    o1[59].items[0].map((item) => {
        o2.push({
          "id": item.id,
          "product": item.product,
          "unit_price": item.unit_price,
          "quantity": item.quantity,
        });
        console.log(o2);
    });
    /*o2.map((item) => {
        o3.push({
          "id": item.id,
          "customer": item.customer,
          "placed_at": item.placed_at,
          "payement_status": item.payement_status,
          "items": item.items,
           "total_price": item.total_price,
           "total_price_for_secial_clients": item.total_price_for_secial_clients
        });
        console.log(o3);
    });*/
    
  return (
      <> 
      {
          commandes.status === "succes" && commandes.response != [] ? (

            <>
  
            
            </>
          ) : commandes.status === "success" ?  (
          <>
          
         <div className="cart-container" style={{padding:"100px", marginBottom:"100px"}}>
       <h2>Vos commandes</h2>
        <div className="cart-empty">
          <p>Vous n'avez aucune commande! </p>
          <div className="start-shopping">
            <Link to="/">
              <FiShoppingCart style={{ width: "20", height: "20" }} />
              <span>Parcourez notre site et découvrez nos produits!</span>
            </Link>
          </div>
          </div>
          </div> 
          </>
          ) : (
              <>
              <p> {commandes.errors}</p>
              </>
          )
      }
    <div>VoirCommandes</div>
    </>
  )
}
