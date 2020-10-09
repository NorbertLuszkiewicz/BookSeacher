import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { bookList } from 'actions';
import logo from 'assets/logo.png';
import Input from 'components/Input/Input';
import Card from 'components/Card/Card';

const Wrapper = styled.main`
  width: 90%;
  max-width: 1400px;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Logo = styled.img`
  width: 100%;
  max-width: 800px;
`;

const StyledForm = styled.form`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  max-width: 1000px;
`;

const StyledLabel = styled.label`
  display: flex;
  line-height: 30px;
  margin: 10px 0;
  font-size: ${({ theme }) => theme.fontSize.m};
`;

const HomeView = () => {
  const [title, setTitle] = useState('flowers');
  const [author, setAuthor] = useState('');
  const [language, setLanguage] = useState('');
  const [publishedDate, setPublishedDate] = useState('');

  const listOfBooks = useSelector(state => state.bookList);
  const { books, loading, error } = listOfBooks;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(bookList(title, author, language, publishedDate));
  }, [dispatch]);

  return loading ? (
    <div>LOADING ...</div>
  ) : (
    <Wrapper>
      {error ? (
        <div>ERROR</div>
      ) : (
        <>
          <Logo src={logo} alt="book seacher logo" />
          <StyledForm>
            <StyledLabel>
              <p>Book title</p>
              <Input search type="text" />
            </StyledLabel>
            <StyledLabel>
              {'Author'}
              <Input type="text" />
            </StyledLabel>
            <StyledLabel>
              {'Language'}
              <Input type="text" />
            </StyledLabel>
            <StyledLabel>
              {'Published date'}
              <Input type="date" />
            </StyledLabel>
          </StyledForm>
          <section>
            {books.length > 0 &&
              books.map(book => {
                return (
                  <Card
                    key={book.id}
                    title={book.volumeInfo.title}
                    author={book.volumeInfo.authors}
                    image={book.volumeInfo.imageLinks.thumbnail}
                    language={book.volumeInfo.language}
                    publishedDate={book.volumeInfo.publishedDate}
                  />
                );
              })}
          </section>
        </>
      )}
    </Wrapper>
  );
};

export default HomeView;
