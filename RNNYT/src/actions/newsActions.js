import { LOAD_NEWS, SEARCH_NEWS } from './actionTypes';
import mockData from '../mockData.json';

export const loadNews = data => ({
     type: LOAD_NEWS,
     payload: []
});
export const searchNews = searchTerm => ({
     type: SEARCH_NEWS,
     payload: searchTerm
});