export function itemsHasErrored(state = false, action) {
  switch (action.type) {
      case 'ITEMS_HAS_ERRORED':
          return action.hasErrored;

      default:
          return state;
  }
}

export function itemsIsLoading(state = false, action) {
  switch (action.type) {
      case 'ITEMS_IS_LOADING':
          return action.isLoading;

      default:
          return state;
  }
}

export function isHasData(state = false, action) {
  switch (action.type) {
    case 'IS_HAS_DATA': 
      return action.isHasData
    default: 
      return state;
  }
}

export function itemsAllFilms(state=[], action) {
  switch (action.type) {
    case 'ITEMS_DATA': 
      return action.itemsAllFilms
    default: 
      return state;
  }
}

export function itemCurrentFilm(state=[], action) {
  switch (action.type) {
    case 'CURRENT_FILM': 
      return action.itemCurrentFilm;
    default: 
      return state;
  }
}







