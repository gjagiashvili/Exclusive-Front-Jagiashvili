import Header from "../components/Header.jsx";
import Products from "../components/Products.jsx";
import Testimonials from "../components/Testimonials.jsx";
import Footer from "../components/Footer.jsx";
import { Link } from "react-router-dom";
import "../App.scss";
const Home = () => {
  return (
    <div className="home-container">
      <Header />
      <Products />
      <div className="view-all-products">
        <Link to="*" className="view-all-button">
          View All Products
        </Link>
      </div>
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Home;
