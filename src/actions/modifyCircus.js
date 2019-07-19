import { urlApi } from '../constant';
import { asyncFetchCircus } from './fetchCircus';

export const modifyCircus = index => ({
  type: 'MODIFY_CIRCUS',
  index,
});

export const startFetchModifyCircus = () => ({
  type: 'START_FETCH_MODIFY_CIRCUS',
});

export const fetchSuccessModifyCircus = () => ({
  type: 'FETCH_SUCCESS_MODIFY_CIRCUS',
});

export const fetchErrorModifyCircus = err => ({
  type: 'FETCH_ERROR_MODIFY_CIRCUS',
  err,
});

export const asyncFetchModifyCircus = (
  name, price, place, url, id
) => (dispatch) => {
  dispatch(startFetchModifyCircus());
  const newCircus = {
    name,
    price,
    place,
    url,
  }
  console.log(newCircus);
  
  const config = {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(newCircus),
  };
  fetch(`${urlApi}/circus/${id}`, config)
    .then(() => {
      dispatch(fetchSuccessModifyCircus());
    })
    .catch((err) => {
      console.log(err);

      dispatch(fetchErrorModifyCircus('Une erreur s\'est produite lors de la modification du cirque.'));
    })
    .then(() => { dispatch(asyncFetchCircus()); });
};
