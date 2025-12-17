import { graphqlRequest } from "../graphqlRequest";
import { GamesResponse } from "@/lib/types";

const GET_GAMES = `
  query GetGames {
    games(limit: 5) {
      games {
        id
        title
        description
        platform
        releaseDate
        genre {
          genreName
        }
        developer {
          name
          companyType
        }
        averageRating
        totalReviews
        images {
          image_type
          image_url
        }
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
