import { graphqlRequest } from "../graphqlRequest";
import { GameDetailsByIdResponse } from "@/lib/types";

const GET_GAME_DETAILS_BY_ID = `
  query GetGameDetailsById($id: ID!) {
    game(id: $id) {
      id
      title
      description
      releaseDate
      averageRating
      developer {
        name
      }
      genre {
        genreName
      }
      reviews {
        id
        ratingScore
        reviewText
        user {
          username
        }
      }
      totalReviews
    }
  }
`;

export const getGameDetailsById = (id: string) => {
  return graphqlRequest<GameDetailsByIdResponse>(GET_GAME_DETAILS_BY_ID, { id });
}
