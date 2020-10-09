/* eslint-disable no-underscore-dangle */
import { FIND_BOOK_REQUEST, FIND_BOOK_SUCCESS, FIND_BOOK_FAILURE } from 'actions';

export function bookListReducer(state = { books: [] }, action) {
  switch (action.type) {
    case FIND_BOOK_REQUEST:
      return { loading: true };
    case FIND_BOOK_SUCCESS:
      return { loading: false, books: action.payload.items };
    case FIND_BOOK_FAILURE:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
}
