import "./index.css";
import { format } from "date-fns";
const GalleryImage = (props) => {
  return (
    <>
      <div>
        <img
          src={props.urls.full}
          alt={props.user.name}
          className="urlsFull"
          loading="lazy"
        />
      </div>

      {/* <div>
        <img
          src={props.user.profile_image.large}
          alt={props.user.name}
          loading="lazy"
        />

        <ul>
          <li>{props.user.name}</li> */}
      {/* <li>{format (new Date(props.created_at),"dd MMMM yyyy")}</li> */}
      {/* </ul>
      </div> */}
    </>
  );
};

export default GalleryImage;
