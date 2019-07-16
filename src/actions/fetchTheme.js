import { urlApi } from '../constant';

export const startFetchTheme = () => ({
  type: 'START_FETCH_THEME',
});
export const fetchSuccessTheme = themes => ({
  type: 'FETCH_SUCCESS_THEME',
  themes,
});
export const fetchErrorTheme = err => ({
  type: 'FETCH_ERROR_THEME',
  err,
});

export const asyncFetchTheme = () => {
  return (dispatch) => {
    dispatch(startFetchTheme());
    fetch(`${urlApi}/theme`)    
      .then(res => res.json())
      .then((themes) => {
        dispatch(fetchSuccessTheme(themes));
      })
      .catch(() => {
        dispatch(fetchErrorTheme('Erreur lors du chargement des themes'));
      });
  }
}