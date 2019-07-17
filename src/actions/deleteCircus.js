import { urlApi } from '../constant';
import { asyncFetchCircus } from './fetchCircus';

export const startFetchDeleteCircus = () => ({
  type: 'START_FETCH_DELETE_CIRCUS',
});

export const fetchSuccessDeleteCircus = () => ({
  type: 'FETCH_SUCCESS_DELETE_CIRCUS',
});

export const fetchErrorDeleteCircus = err => ({
  type: 'FETCH_ERROR_DELETE_CIRCUS',
  err,
});

export const asyncFetchDeleteCircus = (
  name, price, place,
) => (dispatch) => {
  dispatch(startFetchDeleteCircus());
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
    .then(res => res.json())
    .then(() => {
      dispatch(fetchSuccessDeleteCircus());      
    })
    .catch(() => {
      dispatch(fetchErrorDeleteCircus('Une erreur s\'est produite lors de la suppression du cirque.'));
    })
    .then(() => { dispatch(asyncFetchCircus()); });
};
