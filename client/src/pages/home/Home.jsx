import Featured from "../../components/featured/Featured";
import Header from "../../components/header/Header";
import FeaturedProperties from "../featuredProperties/FeaturedProperties";
import PropertyList from "../../components/propertyList/PropertyList";
import "./home.css";
import MailList from "../../components/mailList/MailList";

const Home = () => {
  return (
    <div>
      <Header />
      <div className="homeContainer">
        <Featured />
        <h1 className="homeTitle">Browse By Property type</h1>
        <PropertyList />
        <h1 className="homeTitle">Homes guests love</h1>
        <FeaturedProperties />
        <MailList />
      </div>
    </div>
  );
};
export default Home;
