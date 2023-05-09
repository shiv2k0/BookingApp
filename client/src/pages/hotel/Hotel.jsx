import Header from "../../components/header/Header";
import { MdLocationOn, MdOutlineLocationOn } from "react-icons/md";
import "./hotel.css";
import MailList from "../../components/mailList/MailList";
import { useState } from "react";
import { FaChevronCircleLeft, FaChevronCircleRight } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";

const Hotel = () => {
  const [open, setOpen] = useState(false);
  const [sliderNumber, setSliderNumber] = useState(0);
  const photos = [
    {
      src: "https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
    {
      src: "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
    {
      src: "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
    {
      src: "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
    {
      src: "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
    {
      src: "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
  ];
  const handleClick = (index) => {
    setOpen(true);
    setSliderNumber(index);
  };
  const handlePrev = () => {
    if (sliderNumber === 0) {
      setSliderNumber(photos.length - 1);
    } else {
      setSliderNumber(sliderNumber - 1);
    }
  };
  const handleNext = () => {
    if (sliderNumber === photos.length - 1) {
      setSliderNumber(0);
    } else {
      setSliderNumber(sliderNumber + 1);
    }
  };
  return (
    <div>
      <Header type="list" />
      {open && (
        <div className="slider">
          <FaChevronCircleLeft onClick={handlePrev} className="sliderNext" />
          <img src={photos[sliderNumber].src} alt="" />
          <FaChevronCircleRight onClick={handleNext} className="sliderPrev" />
          <RxCross2 className="sliderCross" onClick={() => setOpen(false)} />
        </div>
      )}
      <div className="hotelContainer">
        <div className="hotelWrapper">
          <button className="bookNow">Reserve or Book Now!</button>
          <h1 className="hotelTitle">Grand Hotel</h1>
          <div className="hotelAddress">
            <MdLocationOn />
            <span>Elton St 125 New York</span>
          </div>
          <span className="hotelDistance">
            Excellent location - 500m from center
          </span>
          <span className="hotelPrceHighlight">
            Book a stay over $114 at this property and get a free airport taxi
          </span>
          <div className="hotelImages">
            {photos.map((image, index) => (
              <div className="hotelImgWrapper" key={index}>
                <img
                  src={image.src}
                  onClick={() => handleClick(index)}
                  alt=""
                  className="hotelImg"
                />
              </div>
            ))}
          </div>
          <div className="hotelDetails">
            <div className="hotelDetailsTexts">
              <h1 className="hotelTitle">Stay in the heart of Krakow</h1>
              <p className="hotelDesc">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat
                nostrum aspernatur velit ab voluptatum iusto, tempora quas
                praesentium natus dignissimos enim fugit repudiandae aliquid
                omnis inventore ullam nobis magnam perferendis in impedit dicta
                tempore architecto accusamus consectetur. Minus dolor culpa
                saepe laudantium! Ipsam ad placeat animi itaque voluptatibus
                quod ut debitis quos ex, dolores perferendis aperiam repudiandae
                est voluptates libero.
              </p>
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
    </div>
  );
};

export default Hotel;
