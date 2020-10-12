import axios from 'axios';

export const FIND_BOOK_REQUEST = 'FIND_TITLE_REQUEST';
export const FIND_BOOK_SUCCESS = 'FIND_TITLE_SUCCESS';
export const FIND_BOOK_FAILURE = 'FIND_TITLE_FAILURE';

const API_URL = 'https://www.googleapis.com/books/v1/';

export const bookList = (title, author, publisher, index) => async dispatch => {
  try {
    dispatch({ type: FIND_BOOK_REQUEST });
    const bookTitle = title ? `intitle:${title}` : '';
    const bookAuthor = author ? `inauthor:${author}` : '';
    const bookPublisher = publisher ? `inpublisher:${publisher}` : '';
    const startIndex = `&startIndex=${index}`;

    const { data } = await axios.get(
      `${API_URL}volumes?q=${bookTitle}+${bookAuthor}+${bookPublisher}${startIndex}&maxResults=12`,
    );
    dispatch({ type: FIND_BOOK_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: FIND_BOOK_FAILURE, payload: error.message });
  }
};
