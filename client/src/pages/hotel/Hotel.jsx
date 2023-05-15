import Header from "../../components/header/Header";
import { MdLocationOn, MdOutlineLocationOn } from "react-icons/md";
import "./hotel.css";
import MailList from "../../components/mailList/MailList";
import { useContext, useState } from "react";
import { FaChevronCircleLeft, FaChevronCircleRight } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import useFetch from "../../hooks/useFetch";
import { useLocation, useNavigate } from "react-router-dom";
import { SearchContext } from "../../context/SearchContext";
import { AuthContext } from "../../context/AuthContext";
import Reserve from "../../components/reserve/Reserve";

const Hotel = () => {
  const [open, setOpen] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [sliderNumber, setSliderNumber] = useState(0);
  const location = useLocation();
  const id = location.pathname.split("/")[2];

  const { data, loading, error } = useFetch(`/hotels/find/${id}`);
  const { dates, destination, options } = useContext(SearchContext);
  const { user } = useContext(AuthContext);

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

  const navigate = useNavigate();
  const handleBook = () => {
    if (user) {
      setOpenModal(true);
    } else {
      navigate("/login");
    }
  };

  const MILLISECONDS_PER_DAY = 1000 * 60 * 60 * 24;
  const dayDifference = (date1, date2) => {
    const timeDiff = Math.abs(date2.getTime() - date1.getTime());
    const diffDays = Math.ceil(timeDiff / MILLISECONDS_PER_DAY);
    return diffDays;
  };

  const days = dayDifference(dates[0].endDate, dates[0].startDate);
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
              <button className="bookNow" onClick={handleBook}>
                Reserve or Book Now!
              </button>
              <h1 className="hotelTitle">{data.name}</h1>
              <div className="hotelAddress">
                <MdLocationOn />
                <span>
                  {data.address}, {destination}
                </span>
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
                  <h1>Perfect for a {days}-night stay!</h1>
                  <span>
                    Located in the real heart of Krakow, this property has as
                    excellent location score of 9.8!
                  </span>
                  <h2>
                    <b>${days * data.cheapestPrice * options.room}</b> ({days}{" "}
                    nights)
                  </h2>
                  <button onClick={handleBook}>Reserve or Book Now!</button>
                </div>
              </div>
              {openModal && <Reserve setOpen={setOpenModal} hotelId={id} />}
            </div>
          </div>
          <MailList />
        </>
      )}
    </div>
  );
};

export default Hotel;
