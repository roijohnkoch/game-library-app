import { graphqlRequest } from "../graphqlRequest";

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
        publisher {
          name
          companyType
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
  return graphqlRequest(GET_GAMES);
}
