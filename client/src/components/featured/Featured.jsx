import "./featured.css";
const Featured = () => {
  return (
    <div className="featured">
      <div className="featuredItem">
        <img
          src="https://cdn.pixabay.com/photo/2016/11/14/02/29/apartment-1822410__340.jpg"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Dublin</h1>
          <h1>123 properties</h1>
        </div>
      </div>
      <div className="featuredItem">
        <img
          src="https://cdn.pixabay.com/photo/2017/04/28/22/16/room-2269594__340.jpg"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Austin</h1>
          <h1>532 properties</h1>
        </div>
      </div>
      <div className="featuredItem">
        <img
          src="https://cdn.pixabay.com/photo/2015/11/06/11/45/interior-1026452__340.jpg"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Reno</h1>
          <h1>533 properties</h1>
        </div>
      </div>
    </div>
  );
};

export default Featured;
