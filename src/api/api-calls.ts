import axios from 'axios';
import { TV_MAZE_API_SHOWS_SEARCH_URL, TV_MAZE_API_SHOW_SEARCH_URL } from '../constants/api-constants';

export const fetchShows = async (query: string) => {
  const response = await axios.get(`${TV_MAZE_API_SHOWS_SEARCH_URL}?q=${query}`);
  return response.data;
};

export const fetchShowDetail = async (id: string) => {
  const response = await axios.get(`${TV_MAZE_API_SHOW_SEARCH_URL}/${id}`);
  return response.data;
};
