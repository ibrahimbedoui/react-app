import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToWishlist } from "../features/Wishlist/wishlistSlice";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { productBySubCol, getFilteredSub } from "../features/productsSlice";

export default function ProdParSousCat() {
  const dispatch = useDispatch();
  let { id } = useParams();
  let { sid } = useParams();

  const [values, setValues] = useState({
    id: id,
    sid: sid,
    unit_price_gt: "",
    unit_price_lt: "",
  });

  useEffect(() => {
    dispatch(productBySubCol(sid));
  }, [sid, dispatch]);
  const products = useSelector((state) => state.products);
 
  const navigate = useNavigate();

  const handleAddToWishlist = (product) => {
    dispatch(addToWishlist(product));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(getFilteredSub(values));
  };

  return (
    <>
      <div className="main-container" style={{ marginBottom: "100px" }}>
        <div className="products">
          <form onSubmit={handleSubmit}>
            <div className="filter">
              <div className="filter-sort">
                <h1>Filtrer par:</h1>
                <span>Prix:</span>
                <br />
                <input
                  type="text"
                  placeholder="Plus que"
                  name="unit_price_gt"
                  onChange={(e) =>
                    setValues({ ...values, unit_price_gt: e.target.value })
                  }
                />
                <input
                  type="text"
                  placeholder="Moins que"
                  name="unit_price_lt"
                  onChange={(e) =>
                    setValues({ ...values, unit_price_lt: e.target.value })
                  }
                />
                <button style={{ marginLeft: "10px" }}>FILTRER</button>
              </div>
            </div>
          </form>
          

          {products?.items?.map((product) => {
            return (
              <div key={product.id} className="product">
                <h3 onClick={() => navigate(`/product-detail/${product.id}`)}>
                  {product.title}
                </h3> 
                <img
                  onClick={() => navigate(`/product-detail/${product.id}`)}
                  src={product.images[0]?.image}
                  alt={product.title}
                />
                <div className="details">
                  <span className="price">{product.unit_price}dt</span>
                </div>
                <button onClick={() => handleAddToWishlist(product)}>
                  favoris
                </button>
              </div>
            );
          })}
        </div>
     
      </div>
    </>
  );
}
