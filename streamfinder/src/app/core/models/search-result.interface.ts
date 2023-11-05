import { Provider } from "./provider.interface";

export interface SearchResult {
    film: string;
    vote_average: number;
    overview: string;
    title: string;
    poster_path: string;
    providers: Provider[];
    logo_path: string;
  }