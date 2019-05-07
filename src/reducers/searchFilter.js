import {
  UPDATE_CATEGORY
} from '../actions/searchFilter';

const initialState = {
  category: 'All'
};

export default function reducer(state = initialState, { type, payload }) {
  switch(type) {
    case UPDATE_CATEGORY:
      return {
        ...state,
        category: payload
      };
    
    default:
      return state;
  }
}
