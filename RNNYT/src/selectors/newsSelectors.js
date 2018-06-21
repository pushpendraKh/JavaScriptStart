import { createSelector } from 'reselect';
import { reshapeNewsData, filterNewsBySearchTerm } from
   '../util/dataTransformations';
const newsSelector = state => state.news;
const reshapeNewsSelector = createSelector(
     [newsSelector],
     reshapeNewsData
);
export const allNewsSelector = createSelector(
     [reshapeNewsSelector],
     newsItems => newsItems
);
const searchTermSelector = state => state.searchTerm;

const caseInsensitiveSearchTermSelector = createSelector(
  searchTermSelector,
  searchTerm => searchTerm.toLowerCase()
);

export const searchNewsSelector = createSelector(
  [reshapeNewsSelector, caseInsensitiveSearchTermSelector],
  filterNewsBySearchTerm 
);

//searchTermSelector is a basic input selector responsible
// for simply returning the current value of searchTerm
 // from the Redux state tree. caseInsensitiveSearchTermSelector
  // takes searchTermSelector as an input and transforms it to a 
  //lowercase string for case- insensitive searching. 
  //Finally, searchNewsSelector takes two inputs–our previous reshapeNewsSelector
  // and caseInsensitiveSearchTermSelector. These are passed as arguments to the
  // filterNewsBySearchTerm function. The returning value from filterNewsBySearchTerm 
  //will ultimately be the data exposed to the SearchContainer.