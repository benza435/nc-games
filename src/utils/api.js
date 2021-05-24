import axios from "axios";

const gamesApi = axios.create({
  baseURL: "https://ncnews-9000.herokuapp.com/api",
});

export const getReviews = (async) => {
  const { data } = await gamesApi.get("/");
  return data.reviews;
};
