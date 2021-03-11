import Searchbar from "./components/Searchbar";
import ImageGallery from "./components/ImageGallery";
import Modal from "./components/Modal";
import { useState } from "react";
import s from "./App.module.css";
import Loader from "react-loader-spinner";
import Button from "@material-ui/core/Button";
import { fetchPicturesBase } from "./services/servicesApi";

function App() {
  const [value, setValue] = useState("");
  const [page, setPage] = useState(1);
  const [pictures, setPictures] = useState([]);
  const [modalPicture, setModalPicture] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleSubmitChange = (e) => {
    setPage(1);
    setValue(e.target.value);
  };

  const fetchPictures = (e) => {
    e.preventDefault();

    const options = {
      value,
      page,
    };

    setValue("");
    setIsLoading((prevState) => !prevState);

    fetchPicturesBase(options)
      .then((res) => res.data.hits)
      .then((picturesSet) => {
        setPictures((prevState) => [...prevState, ...picturesSet]);
        setPage((prevState) => prevState + 1);
      })

      .finally(() => {
        setIsLoading((prevState) => !prevState);
      });
  };

  const handleSubmitExecution = (e) => {
    if (value === "") {
      e.preventDefault();
      return alert("The query cannot be empty");
    }
    setPictures([]);
    fetchPictures(e);
  };

  const loadMore = (e) => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });

    fetchPictures(e);
  };

  const toggleModal = () => {
    setShowModal((prevState) => !prevState);
  };

  const onBackdropClick = (e) => {
    if (e.currentTarget === e.target) {
      toggleModal();
    }
  };

  const getModalPicture = (e) => {
    toggleModal();
    const searchedId = Number(e.target.id);
    const searchedPicture = pictures.find(
      (picture) => picture.id === searchedId
    );
    return setModalPicture(searchedPicture);
  };

  const shouldRenderLoadMoreButton = pictures.length > 0 && !isLoading;

  return (
    <div className={s.App}>
      <Searchbar
        value={value}
        onChange={handleSubmitChange}
        onSubmit={handleSubmitExecution}
      />
      <ImageGallery pictures={pictures} onClick={getModalPicture} />
      {isLoading && (
        <Loader
          type="Puff"
          color="#3f51b5"
          height={40}
          width={40}
          timeout={3000}
        />
      )}
      {shouldRenderLoadMoreButton && (
        <Button variant="contained" color="primary" onClick={loadMore}>
          Load More
        </Button>
      )}
      {showModal && (
        <Modal
          picture={modalPicture}
          onClick={toggleModal}
          onBackdropClick={onBackdropClick}
        />
      )}
    </div>
  );
}

export default App;
