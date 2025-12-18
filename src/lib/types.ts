export interface GamesResponse {
  games: {
    games: GameDetails[];
    page: number;
    total: number;
    totalPages: number;
  };
}

export interface CardProps {
  gameDetails: GameDetails
}

export interface GameDetails {
  id: string;
  title: string;
  description: string;
  platform: string;
  releaseDate: string;
  genre: Genre;
  developer: Developer;
  averageRating: number;
  totalReviews: number;
  images: PosterImage[];
  reviews?: Review[];
}

export interface Developer {
  name: string;
}

export interface Genre {
  genreName: string;
}

export interface Review {
  ratingScore: number;
  reviewText: string;
  user: {
    username: string;
  }
}

export interface PosterImage {
  image_type: string;
  image_url: string;
}

export interface GameDetailsByIdResponse {
  game: GameDetails;
}