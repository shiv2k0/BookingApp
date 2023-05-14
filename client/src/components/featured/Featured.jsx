import useFetch from "../../hooks/useFetch";
import "./featured.css";
const Featured = () => {
  const { data, loading, error } = useFetch(
    "/hotels/countByCity?cities=varanasi,mumbai,delhi"
  );
  // console.log(data);
  return (
    <div className="featured">
      {loading ? (
        "Loading please wait"
      ) : (
        <>
          <div className="featuredItem">
            <img
              src="https://cdn.pixabay.com/photo/2016/11/14/02/29/apartment-1822410__340.jpg"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Varanasi</h1>
              <h1>{data[0]} properties</h1>
            </div>
          </div>
          <div className="featuredItem">
            <img
              src="https://cdn.pixabay.com/photo/2017/04/28/22/16/room-2269594__340.jpg"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Mumbai</h1>
              <h1>{data[1]} properties</h1>
            </div>
          </div>
          <div className="featuredItem">
            <img
              src="https://cdn.pixabay.com/photo/2015/11/06/11/45/interior-1026452__340.jpg"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Delhi</h1>
              <h1>{data[2]} properties</h1>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Featured;
