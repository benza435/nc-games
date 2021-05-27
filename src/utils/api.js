import axios from "axios";

const ncApi = axios.create({
  baseURL: "https://nc-games-example.herokuapp.com/api",
});

export const getReviews = async (category) => {
  const { data } = await ncApi.get("/reviews");
  if (category) {
    return data.reviews.filter((review) => {
      return review.category === category;
    });
  }
  return data.reviews;
};

export const getReviewById = async (id) => {
  const { data } = await ncApi.get(`/reviews/${id}`);
  return data.review;
};

// get ALL REVIEWS and sort them
export const getAndSortReviews = async ({ sortValue }) => {
  const { data } = await ncApi.get("/reviews", {
    params: {
      sort_by: sortValue,
    },
  });
  return data.reviews;
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

export const getComments = async (review_id) => {
  const { data } = await ncApi.get(`/reviews/${review_id}/comments`);
  return data.comments;
};

export const patchVotes = async (review_id) => {
  await ncApi.patch(`/reviews/${review_id}`, { inc_votes: 1 });

  return null;
};

export const postComment = async (review_id, user, body) => {
  const newComment = { body: body, username: user };
  const { data } = await ncApi.post(
    `/reviews/${review_id}/comments`,
    newComment
  );
  return data.comment;
};

// stuff for later:

// getUserAvatar()
// get top 10 comments/reviews/users etc
//  cycle clickbait
