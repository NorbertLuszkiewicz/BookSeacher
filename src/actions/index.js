import axios from 'axios';

export const FIND_BOOK_REQUEST = 'FIND_TITLE_REQUEST';
export const FIND_BOOK_SUCCESS = 'FIND_TITLE_SUCCESS';
export const FIND_BOOK_FAILURE = 'FIND_TITLE_FAILURE';

const SERVER_URL = 'https://www.googleapis.com/books/v1/';

export const bookList = (title, author, launguage, publishedDate) => async dispatch => {
  try {
    dispatch({ type: FIND_BOOK_REQUEST });
    const { data } = await axios.get(`${SERVER_URL}volumes?q=${title}`);
    dispatch({ type: FIND_BOOK_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: FIND_BOOK_FAILURE, payload: error.message });
  }
};
