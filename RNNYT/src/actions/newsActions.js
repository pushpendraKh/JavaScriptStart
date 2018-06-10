import { LOAD_NEWS, SEARCH_NEWS, LOGIN } from './actionTypes';
import mockData from '../mockData.json';

export const loadNews = data => ({
     type: LOAD_NEWS,
     payload: []
});
export const searchNews = searchTerm => ({
     type: SEARCH_NEWS,
     payload: searchTerm
});

export const login = data => {
    console.log("Login");
    return {
                type:LOGIN,
                payload:[]
        }
    }