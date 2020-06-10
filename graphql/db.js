import fetch from "node-fetch";

const API_URL = "https://yts.mx/api/v2/list_movies.json";

export const getMovies = (limit, rating, id) => {
  let REQUEST_URL = API_URL;
  if (limit > 0) {
    REQUEST_URL += `?limit=${limit}`;
  }
  if (rating > 0) {
    if (limit) {
      REQUEST_URL += `&minimum_rating=${rating}`;
    } else {
      REQUEST_URL += `?minimum_rating=${rating}`;
    }
  }
  if (id > 0) {
    if (limit || rating) {
      REQUEST_URL += `&movie_id=${id}`;
    } else {
      REQUEST_URL += `?movie_id=${id}`;
    }
  }
  return fetch(REQUEST_URL)
    .then(res => res.json())
    .then(json => json.data.movies);
};
