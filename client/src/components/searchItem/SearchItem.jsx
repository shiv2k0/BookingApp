import { Link } from "react-router-dom";
import "./searchItem.css";

const SearchItem = ({ item }) => {
  return (
    <div className="searchItem">
      <img src={item.photos[0]} alt="" className="siImg" />
      <div className="siDesc">
        <h1 className="siTitle">{item.name}</h1>
        <span className="siDistance">{item.distance}m from center</span>
        <span className="siTaxiOp">Free airport taxi</span>
        <span className="siSubtitle">
          Studio Apartment with Air conditioning
        </span>
        <span className="siFeatures">{item.desc}</span>
        <span className="siCancelOp">Free cancellation</span>
        <span className="siCancelOpSubtitle">
          You can cancel later, so lock this great price today!
        </span>
      </div>
      <div className="siDetails">
        <div>
          {item.rating && (
            <div className="siRating">
              <span>Excellent</span>
              <span className="rating">{item.rating}</span>
            </div>
          )}
        </div>
        <div className="siRight">
          <div className="siPrice">${item.cheapestPrice}</div>
          <div className="siTaxOp">Includes taxes and fees</div>
          <Link to={`/hotels/${item._id}`}>
            <button className="siCheckButton">See availability</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SearchItem;
