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
  id
) => (dispatch) => {
  dispatch(startFetchDeleteCircus());
  const config = {
    method: 'DELETE',
  };
  fetch(`${urlApi}/circus/${id}`, config)
    .then(() => {
      dispatch(fetchSuccessDeleteCircus());      
    })
    .catch(() => {
      dispatch(fetchErrorDeleteCircus('Une erreur s\'est produite lors de la suppression du cirque.'));
    })
    .then(() => { dispatch(asyncFetchCircus()); });
};
