import { graphqlRequest } from "../graphqlRequest";
import { GamesResponse } from "@/lib/types";

const GET_GAMES = `
  query GetGames {
    games(limit: 5) {
      games {
        id
        title
        releaseDate
        genre {
          genreName
        }
        averageRating
        totalReviews
      }
      total
      page
      totalPages
    }
  }
`;

export const getGames = () => {
  return graphqlRequest<GamesResponse>(GET_GAMES);
}
