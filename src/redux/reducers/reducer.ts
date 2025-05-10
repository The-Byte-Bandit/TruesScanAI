import { SEARCH_REQUEST, SEARCH_SUCCESS, SEARCH_FAILURE } from '../actionTypes.ts';
import { AuthState, AuthActionTypes } from '../actions/types.ts';

const initialState: AuthState = {
  user: JSON.parse(localStorage.getItem('user') || 'null'),
  isAuthenticated: localStorage.getItem('token') && localStorage.getItem('authenticated') === "true",
  error: null,
  loading: false,
  isAdmin: JSON.parse(localStorage.getItem('user') || 'null')?.isAdmin || false,
  analysisData: null,
  truthScore: null,
  searchResults: [],
  success: false,
};

const authReducer = (state = initialState, action: AuthActionTypes): AuthState => {
  switch (action.type) {
    case SEARCH_REQUEST:
      return { ...state, loading: true, error: null, searchResults: [] };

    case SEARCH_SUCCESS:
      return {
        ...state,
        loading: false,
        searchResults: action.payload,  // Store the search results
        error: null,
        success: true,
      };

    case SEARCH_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default authReducer;
