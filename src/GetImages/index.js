import "./index.css";
import { useEffect, useState } from "react";
import GalleryImage from "../GalleryImage";

const GetImages = () => {
  const [userImage, setImage] = useState([]);

  useEffect(() => {
    const url =
      "https://api.unsplash.com/photos?client_id=f7uagbJpgwyoFBx_xnb_3tuCYk6pGifaTVOtJ71j8J4";
    fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((data) => setImage(data));
  }, []);
  console.log(userImage);

  return (
    <>
      <section className="container">
        <div className="gallery">
          {userImage.map((image) => (
            <GalleryImage key={image.id} {...image} />
          ))}
        </div>
      </section>
    </>
  );
};

export default GetImages;
