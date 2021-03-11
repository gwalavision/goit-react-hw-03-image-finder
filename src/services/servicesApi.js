import axios from "axios";

let query = "";

const fetchPicturesBase = ({
  value,
  page = 1,
  apiKey = "19920308-f5c9c99cb5045aa424c0eff35",
}) => {
  if (value !== "") {
    query = value;
  }

  return axios.get(
    `https://pixabay.com/api/?q=${query}&page=${page}&key=${apiKey}&image_type=photo&orientation=horizontal&per_page=15`
  );
};

export { fetchPicturesBase };
