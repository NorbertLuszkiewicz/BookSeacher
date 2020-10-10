import axios from 'axios';

export const FIND_BOOK_REQUEST = 'FIND_TITLE_REQUEST';
export const FIND_BOOK_SUCCESS = 'FIND_TITLE_SUCCESS';
export const FIND_BOOK_FAILURE = 'FIND_TITLE_FAILURE';

const API_URL = 'https://www.googleapis.com/books/v1/';

export const bookList = (title, author, publisher) => async dispatch => {
  try {
    dispatch({ type: FIND_BOOK_REQUEST });
    const bookTitle = title ? `intitle:${title}` : 'intitle:NoSearchResults';
    const bookAuthor = author ? `inauthor:${author}` : '';
    const bookPublisher = publisher ? `inpublisher:${publisher}` : '';
    const results = `&maxResults=12`;

    const { data } = await axios.get(
      `${API_URL}volumes?q=${bookTitle}+${bookAuthor}+${bookPublisher}${results}`,
    );
    dispatch({ type: FIND_BOOK_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: FIND_BOOK_FAILURE, payload: error.message });
  }
};
