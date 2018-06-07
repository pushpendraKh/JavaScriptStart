import { LOAD_NEWS, SEARCH_NEWS } from './actionTypes';
import mockData from '../mockData.json';
export const loadNews = () => ({
     type: LOAD_NEWS,
     payload: mockData
});
export const searchNews = searchTerm => ({
     type: SEARCH_NEWS,
     payload: searchTerm
});