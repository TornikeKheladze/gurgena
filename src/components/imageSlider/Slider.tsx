import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import * as images from "../../images";

const spanStyle = {
  padding: "20px",
  background: "#efefef",
  color: "#000000",
};

const divStyle = {
  // display: "flex",
  // alignItems: "center",
  // justifyContent: "center",
  backgroundSize: "cover",
  height: "100vh",
};

const Slideshow = () => {
  const imgs = [...Object.values(images)];

  return (
    <div className="slide-container w-full">
      <Slide arrows={false}>
        {imgs.map((slideImage, index) => (
          <div key={index}>
            <div style={{ ...divStyle, backgroundImage: `url(${slideImage})` }}>
              {/* <span style={spanStyle}>{slideImage.caption}</span> */}
            </div>
          </div>
        ))}
      </Slide>
    </div>
  );
};

export default Slideshow;
