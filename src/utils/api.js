import axios from "axios";

const ncApi = axios.create({
  baseURL: "https://ncnews-9000.herokuapp.com/api",
});

export const getReviews = async (category) => {
  console.log(category);
  const { data } = await ncApi.get("/reviews");
  // take category as arg, modify path, return reviews by category?
  if (category) {
    return data.reviews.filter((review) => {
      return review.category === category;
    });
  }
  return data.reviews;
};

export const getReviewById = async (id) => {
  return null;
};

export const getCategories = async () => {
  const { data } = await ncApi.get("/categories");
  return data.categories;
};

export const atTimeOnDate = (mess) => {
  const elements = mess.split("T");
  let date = elements[0];
  let time = elements[1].substring(0, 8);

  return `at ${time} on ${date}`;
};
