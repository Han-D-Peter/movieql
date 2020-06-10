import { getMovies } from "./db";

const resolvers = {
  Query: {
    movies: (_, { rating, limit, id }) => getMovies(limit, rating, id)
  }
};

export default resolvers;
