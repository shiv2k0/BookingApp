import Header from "../../components/header/Header";
import { MdLocationOn, MdOutlineLocationOn } from "react-icons/md";
import "./hotel.css";
import MailList from "../../components/mailList/MailList";
import { useState } from "react";
import { FaChevronCircleLeft, FaChevronCircleRight } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import useFetch from "../../hooks/useFetch";
import { useLocation } from "react-router-dom";

const Hotel = () => {
  const [open, setOpen] = useState(false);
  const [sliderNumber, setSliderNumber] = useState(0);
  const location = useLocation();
  const id = location.pathname.split("/")[2];

  const { data, loading, error } = useFetch(`/hotels/find/${id}`);

  const handleClick = (index) => {
    setOpen(true);
    setSliderNumber(index);
  };
  const handlePrev = () => {
    if (sliderNumber === 0) {
      setSliderNumber(data.photos.length - 1);
    } else {
      setSliderNumber(sliderNumber - 1);
    }
  };
  const handleNext = () => {
    if (sliderNumber === data.photos.length - 1) {
      setSliderNumber(0);
    } else {
      setSliderNumber(sliderNumber + 1);
    }
  };
  console.log(data);
  return (
    <div>
      <Header type="list" />
      {open && (
        <div className="slider">
          <FaChevronCircleLeft onClick={handlePrev} className="sliderNext" />
          <img src={data.photos[sliderNumber]} alt="" />
          <FaChevronCircleRight onClick={handleNext} className="sliderPrev" />
          <RxCross2 className="sliderCross" onClick={() => setOpen(false)} />
        </div>
      )}
      {loading ? (
        "Loading...."
      ) : (
        <>
          <div className="hotelContainer">
            <div className="hotelWrapper">
              <button className="bookNow">Reserve or Book Now!</button>
              <h1 className="hotelTitle">{data.name}</h1>
              <div className="hotelAddress">
                <MdLocationOn />
                <span>{data.address}</span>
              </div>
              <span className="hotelDistance">
                Excellent location - 500m from center
              </span>
              <span className="hotelPrceHighlight">
                Book a stay over $114 at this property and get a free airport
                taxi
              </span>
              <div className="hotelImages">
                {data.photos?.map((image, index) => (
                  <div className="hotelImgWrapper" key={index}>
                    <img
                      src={image}
                      onClick={() => handleClick(index)}
                      alt=""
                      className="hotelImg"
                    />
                  </div>
                ))}
              </div>
              <div className="hotelDetails">
                <div className="hotelDetailsTexts">
                  <h1 className="hotelTitle">{data.title}</h1>
                  <p className="hotelDesc">{data.desc}</p>
                </div>
                <div className="hotelDetailsPrice">
                  <h1>Perfect for a 9-night stay!</h1>
                  <span>
                    Located in the real heart of Krakow, this property has as
                    exvellent location score of 9.8!
                  </span>
                  <h2>
                    <b>$945</b> (9 nights){" "}
                  </h2>
                  <button>Reserve or Book Now!</button>
                </div>
              </div>
            </div>
          </div>
          <MailList />
        </>
      )}
    </div>
  );
};

export default Hotel;
