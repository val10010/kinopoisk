export function itemsHasErrored(bool) {
  return {
      type: 'ITEMS_HAS_ERRORED',
      hasErrored: bool
  };
}

export function itemsIsLoading(bool) {
  return {
      type: 'ITEMS_IS_LOADING',
      isLoading: bool
  };
}

export function isHasData(bool) {
  return {
    type: 'IS_HAS_DATA',
    isHasData: bool
  }
}

export function itemsAllFilms(items) {
  return {
    type: 'ITEMS_DATA',
    itemsAllFilms: items
  }
} 

export function itemsCurrentFilm(item) {
  return {
    type: 'CURRENT_FILM',
    itemCurrentFilm: item
  }
} 


export function itemsFetchData(film) {
  return (dispatch) => {
      dispatch(itemsIsLoading(true));
      fetch(`https://api.tvmaze.com/search/shows?q=${film}`)
          .then((response) => {
              if (!response.ok) {
                  throw Error(response.statusText);
              }

              dispatch(itemsIsLoading(false));

              return response;
          })
          .then((response) => response.json())
          .then((items) => {
            dispatch(isHasData(true))
            dispatch(itemsAllFilms(items))
          })
          .catch(() => dispatch(itemsHasErrored(true)));
  };
}


export function itemCurrentFilm(film) {
  return (dispatch) => {
      dispatch(itemsIsLoading(true));
      fetch(`https://api.tvmaze.com/shows/${film}`)
          .then((response) => {
              if (!response.ok) {
                  throw Error(response.statusText);
              }

              dispatch(itemsIsLoading(false));

              return response;
          })
          .then((response) => response.json())
          .then((item) => {
            dispatch(isHasData(true))
            dispatch(itemsCurrentFilm(item))
          })
          .catch(() => dispatch(itemsHasErrored(true)));
  };
}