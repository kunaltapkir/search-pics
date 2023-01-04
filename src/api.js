import axios from "axios";

const searchImages = async () => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: "Client-ID jQ7iQgk-HW6Bu0Qor3jEV50CARoYPKE7KCxlbxEpzso",
    },
    params: {
      query: "cars",
    },
  });

  return response.data.results;
};

export default searchImages;
