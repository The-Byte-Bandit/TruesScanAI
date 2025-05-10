// import { SEARCH_REQUEST, SEARCH_SUCCESS, SEARCH_FAILURE } from '../actionTypes.ts';
// import { Dispatch } from 'redux';
// import { BASE_URL } from '../../constants/constant.ts';

// export const searchArticles = (query: string, image?: File) => async (dispatch: Dispatch) => {
//   dispatch({ type: SEARCH_REQUEST });
//   console.log(query);
  
//   try {
//     const response = await fetch(`${BASE_URL}`, {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify({ text: query, image:image }), 
//     });

//     const data = await response.json();
//     console.log(data);
    

//     if (!response.ok) {
//       throw new Error('Failed to fetch search results.');
//     }

//     dispatch({ type: SEARCH_SUCCESS, payload: data });
//   } catch (error) {
//     dispatch({ type: SEARCH_FAILURE, payload: error.message });
//   }
// };


import { SEARCH_REQUEST, SEARCH_SUCCESS, SEARCH_FAILURE } from '../actionTypes.ts';
import { Dispatch } from 'redux';
import { BASE_URL } from '../../constants/constant.ts';

interface SearchPayload {
  query: string;
  image?: File | null;
}

export const searchArticles = ({ query, image }: SearchPayload) => async (dispatch: Dispatch) => {
  dispatch({ type: SEARCH_REQUEST });
  console.log('Query:', query, 'Image:', image);

  try {
    const formData = new FormData();
    formData.append('text', query); // Match backend expected field name
    if (image) {
      formData.append('image', image); // Add image to FormData if present
    }

    const response = await fetch(BASE_URL, {
      method: 'POST',
      body: formData, // Send FormData instead of JSON
      // Note: Do not set 'Content-Type' header; browser sets 'multipart/form-data' with boundary automatically
    });

    const data = await response.json();
    console.log('Response data:', data);

    if (!response.ok) {
      throw new Error(data.message || 'Failed to fetch search results.');
    }

    dispatch({ type: SEARCH_SUCCESS, payload: data });
  } catch (error: any) {
    const errorMessage = error.message || 'An error occurred while fetching search results.';
    dispatch({ type: SEARCH_FAILURE, payload: errorMessage });
  }
};