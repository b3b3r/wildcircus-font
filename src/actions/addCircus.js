import { urlApi } from '../constant';
import { asyncFetchCircus } from './fetchCircus';

export const addCircus = () => ({
  type: 'ADD_CIRCUS',
});

export const startFetchAddCircus = () => ({
  type: 'START_FETCH_ADD_CIRCUS',
});

export const fetchSuccessAddCircus = () => ({
  type: 'FETCH_SUCCESS_ADD_CIRCUS',
});

export const fetchErrorAddCircus = err => ({
  type: 'FETCH_ERROR_ADD_CIRCUS',
  err,
});

export const asyncFetchAddCircus = (
  name, price, place,
) => (dispatch) => {
  dispatch(startFetchAddCircus());
  const newCircus = {
    name,
    price,
    place,
  }
  const config = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(newCircus),
  };
  fetch(`${urlApi}/circus`, config)
    .then(() => {
      dispatch(fetchSuccessAddCircus());
    })
    .catch((err) => {
      console.log(err);

      dispatch(fetchErrorAddCircus('Une erreur s\'est produite lors de l\'enregistrement du cirque.'));
    })
    .then(() => { dispatch(asyncFetchCircus()); });
};
