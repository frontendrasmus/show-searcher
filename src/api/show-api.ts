// src/api/fetchShows.ts
import axios from 'axios';
import { IShowSearchResult } from '../types';
import { TV_MAZE_API_FUZZY_SEARCH_URL } from '../constants/api-constants';

export const fetchShows = async (query: string): Promise<IShowSearchResult[]> => {
  const response = await axios.get(`${TV_MAZE_API_FUZZY_SEARCH_URL}?q=${query}`);
  // return response.data.sort((a: IShowSearchResult, b: IShowSearchResult) => b.score - a.score);
  return response.data;
};
