import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import Acceuil from "./pages/Acceuil";
import Activation from "./pages/Activation";
import ResetPasswordConfirm from "./pages/ResetPasswordConfirm";
import Changermdp from "./pages/Changermdp";
import Login1 from "./components/Login1";
import Register from "./components/Register";
import Layout from "./Hocs/Layout";
import Cart from "./components/Cart";
import NotFound from "./pages/NotFound";
import Wishlist from "./components/Wishlist";
import Profileuser from "./pages/Profileuser";
import ProfileEdit from "./components/ProfileEdit";
import ProductDetail from "./components/ProductDetail";
import { ToastContainer } from "react-toastify";
//react router dom v6 syntax for routing
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Store from "./components/Store";
import SellerRegistration from "./pages/SellerRegistration";
import SellerLogin from "./components/SellerLogin";
import StoreRegister from "./components/StoreRegister";
import WishlistAuth from "./components/WishlistAuth";
import Commande from "./components/Commande";
import Profilestores from "./pages/Profilestores";
import VendeurInfo from "./components/VendeurInfo";
import SearchResult from "./components/SearchResult";
import Retourner from "./components/Retourner";
import Profilecommandes from "./pages/ProfileCommandes";
import ProdParCat from "./components/ProdParCat";
import ProdParSousCat from "./components/ProdParSousCat";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <ToastContainer />
        <Layout>
          <Routes>
            <Route path="/" exact element={<Acceuil />} />
            <Route path="/product-detail/:id" element={<ProductDetail />} />
            <Route path="/commande" element={<Commande />} />
            <Route path="/Cart" element={<Cart />}></Route>
            <Route path="/vendeur-info" element={<VendeurInfo />}></Route>
            <Route path="/recherche=:query" element={<SearchResult />}></Route>
            <Route
              path="/reset-password-confirm"
              element={<ResetPasswordConfirm />}
            ></Route>
            <Route path="/reset-password" element={<Changermdp />}></Route>

            <Route path="/demande-de-retour" element={<Retourner />}></Route>

            <Route
              path="/Profile-vendeurs-favoris"
              element={<Profilestores />}
            ></Route>
            <Route
              path="/Profile-commandes"
              element={<Profilecommandes />}
            ></Route>

            <Route
              path="/produits-collection/:id"
              element={<ProdParCat />}
            ></Route>
            <Route
              path="/produits-collection/:id/sous-collection/:sid"
              element={<ProdParSousCat />}
            ></Route>

            <Route path="/boutique/:id" element={<Store />}></Route>
            <Route path="/Wishlist-auth" element={<WishlistAuth />}></Route>
            <Route path="/Wishlist" element={<Wishlist />}></Route>
            <Route path="/Profile" element={<Profileuser />}></Route>
            <Route path="/editprofile" element={<ProfileEdit />}></Route>
            <Route path="/login" element={<Login1 />} />
            <Route path="/signup" element={<Register />} />
            <Route
              path="/password/reset/confirm/:uid/:token"
              element={<ResetPasswordConfirm />}
            />
            <Route path="/store-register" element={<StoreRegister />} />
            <Route path="/seller-register" element={<SellerRegistration />} />
            <Route path="/seller-login" element={<SellerLogin />} />
            <Route path="/activate/:uid/:token" element={<Activation />} />
            <Route path="*" element={<NotFound />}></Route>
            <Route to="/not-found" />
            {/*need to add a redirection to not found when typing in false urls */}
          </Routes>
        </Layout>
      </BrowserRouter>
    </>
  );
};

export default App;
