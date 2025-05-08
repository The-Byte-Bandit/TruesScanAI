import { SEARCH_REQUEST, SEARCH_SUCCESS, SEARCH_FAILURE } from '../actionTypes.ts';
import { Dispatch } from 'redux';
import { BASE_URL } from '../../constants/constant.ts';

export const searchArticles = (query: string) => async (dispatch: Dispatch) => {
  dispatch({ type: SEARCH_REQUEST });
  console.log(query);
  
  try {
    const response = await fetch(`${BASE_URL}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text: query }), 
    });

    const data = await response.json();
    console.log(data);
    

    if (!response.ok) {
      throw new Error('Failed to fetch search results.');
    }

    dispatch({ type: SEARCH_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: SEARCH_FAILURE, payload: error.message });
  }
};
