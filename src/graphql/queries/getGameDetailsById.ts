import { graphqlRequest } from "../graphqlRequest";
import { GameDetailsByIdResponse } from "@/lib/types";

const GET_GAME_DETAILS_BY_ID = `
  query GetGameDetailsById($id: ID!) {
    game(id: $id) {
      id
      title
      description
      platform
      releaseDate
      reviews {
        ratingScore
        reviewText
        user {
          username
        }
      }
      averageRating
      totalReviews
    }
  }
`;

export const getGameDetailsById = (id: string) => {
  return graphqlRequest<GameDetailsByIdResponse>(GET_GAME_DETAILS_BY_ID, { id });
}
