import s from "./ImageGallery.module.css";
const ImageGallery = ({ pictures, onClick }) => {
  return (
    <ul className={s.ImageGallery}>
      {pictures.map(({ id, webformatURL, largeURL, tags }) => (
        <li key={id} className={s.ImageGalleryItem} onClick={onClick}>
          <img
            id={id}
            className={s["ImageGalleryItem-image"]}
            src={webformatURL}
            alt={tags}
          />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
