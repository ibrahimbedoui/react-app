import NavBar2 from "../components/NavBar2";
import Footer from "../components/Footer";

//here we're setting up the layout and later on with redux, we'll make it so that if you refresh the page and you're logged in, you remain logged in, it checks the authorization.

const Layout = (props) => (
  <div>
    <NavBar2/>
   
   
    {props.children}
    <Footer />
  </div>
);

export default Layout;
