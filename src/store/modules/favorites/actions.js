export function addFavorite(movie) {
  return {
    type: '@favorites/ADD_FAVORITE',
    movie,
  };
}

export function removeFromFavorite(imdbID) {
  return {
    type: '@favorites/REMOVE_FAVORITE',
    imdbID,
  };
}
