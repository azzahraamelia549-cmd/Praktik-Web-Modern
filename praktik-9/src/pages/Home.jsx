import ProductList from "../components/ProductList";
import Cart from "../components/Cart";
import UserProfile from "../components/UserProfile";

const Home = () => {
  return (
    <div className="home-page">
      <div className="container">
        <ProductList />
        <div>
          <UserProfile />
          <Cart />
        </div>
      </div>
    </div>
  );
};

export default Home;
