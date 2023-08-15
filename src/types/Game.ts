export interface Game {
  id:string;
  name: string;
  images?: {
    small:string;
    large: string;
  };
  average_user_rating: number;
  playtime: number;
  description: string;
  price: string;
  year_published: number;
  min_players: number;
  max_players: number;
  average_learning_complexity?: number;
  average_strategy_complexity?: number;
};
