import axios from "axios";

const ncApi = axios.create({
  baseURL: "https://ncnews-9000.herokuapp.com/api",
});

export const getReviews = async () => {
  const { data } = await ncApi.get("/reviews");
  return data.reviews;
};

export const getCategories = async () => {
  const { data } = await ncApi.get("/categories");
  return data.categories;
};
