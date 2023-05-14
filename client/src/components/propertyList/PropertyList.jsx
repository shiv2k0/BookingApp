import useFetch from "../../hooks/useFetch";
import "./propertyList.css";

const PropertyList = () => {
  const { data, loading, error } = useFetch("/hotels/countByType");
  const images = [
    "https://cdn.pixabay.com/photo/2016/10/18/09/02/hotel-1749602_640.jpg",
    "https://cdn.pixabay.com/photo/2022/04/10/19/33/house-7124141_640.jpg",
    "https://cdn.pixabay.com/photo/2015/03/09/18/34/beach-666122_1280.jpg",
    "https://cdn.pixabay.com/photo/2015/11/06/11/39/single-family-home-1026371_640.jpg",
    "https://cdn.pixabay.com/photo/2014/07/10/17/17/hotel-389256__340.jpg",
  ];
  return (
    <div className="pList">
      {loading ? (
        "Loading...."
      ) : (
        <>
          {data &&
            images.map((img, i) => (
              <div className="pListItem" key={i}>
                <img src={img} alt="" className="pListImg" />
                <div className="pListTitles">
                  <h1>{data[i]?.type}</h1>
                  <h2>
                    {data[i]?.count} {data[i]?.type}
                  </h2>
                </div>
              </div>
            ))}
        </>
      )}
    </div>
  );
};

export default PropertyList;
