import { urlApi } from '../constant';

export const startFetchCircus = () => ({
  type: 'START_FETCH_CIRCUS',
});
export const fetchSuccessCircus = (circus) => ({
  type: 'FETCH_SUCCESS_CIRCUS',
  circus,
});
export const fetchErrorCircus = err => ({
  type: 'FETCH_ERROR_CIRCUS',
  err,
});

export const addCircus = () => ({
  type:'ADD_CIRCUS',
})

export const asyncFetchCircus = () => (dispatch) => {
  dispatch(startFetchCircus());
  fetch(`${urlApi}/theme/circus`)
    .then(res => res.json())
    .then((circus) => {
      dispatch(fetchSuccessCircus(circus));
    })
    .catch(() => {
      dispatch(fetchErrorCircus('Erreur lors du chargement des cirques'));
    });
};
