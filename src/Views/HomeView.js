import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { bookList } from 'actions';
import logo from 'assets/logo.png';
import Input from 'components/Input/Input';
import Button from 'components/Button/Button';
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
  font-size: ${({ theme }) => theme.fontSize.s};
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const CardWrapper = styled.section`
  display: grid;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, auto);
    column-gap: 10px;
  }

  @media (min-width: 1200px) {
    grid-template-columns: repeat(3, auto);
  }
`;

const Status = styled.p`
  margin-top: 20px;

  @media (min-width: 768px) {
    padding-left: 10px;
  }

  @media (min-width: 1200px) {
    padding-left: 20px;
  }
`;

const HomeView = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [publisher, setPublisher] = useState('');
  const [language, setLanguage] = useState('');
  const [index, setIndex] = useState(0);

  const [bookState, setBookState] = useState([title, author, publisher]);
  const [renderingBooks, setRenderingBooks] = useState([]);

  const listOfBooks = useSelector(state => state.bookList);
  const { books, loading, error } = listOfBooks;

  const handleSearchBook = e => {
    e.preventDefault();
    setBookState([title, author, publisher]);
  };

  window.onscroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop ===
      document.documentElement.offsetHeight
    ) {
      setIndex(index + 12);
    }
  };

  useEffect(() => {
    if (title !== '' || author !== '' || publisher !== '') {
      dispatch(bookList(title, author, publisher, index));
      setRenderingBooks([]);
      setIndex(0);
    }
  }, [bookState]);

  useEffect(() => {
    if (title !== '' || author !== '' || publisher !== '') {
      dispatch(bookList(title, author, publisher, index));
    }
  }, [index]);

  useEffect(() => {
    if (books) {
      setRenderingBooks([...renderingBooks, ...books]);
    }
  }, [books]);

  return (
    <Wrapper data-testid="home">
      <>
        <Logo src={logo} alt="logo book seacher " data-testid="logo" />
        <StyledForm onSubmit={e => handleSearchBook(e)}>
          <StyledLabel>
            <p>Book title</p>
            <Input
              search
              type="text"
              placeholder="Harry Potter"
              value={title}
              onChange={e => setTitle(e.target.value)}
            />
          </StyledLabel>
          <StyledLabel>
            {'Author'}
            <Input
              type="text"
              placeholder="J.K. Rowling"
              value={author}
              onChange={e => setAuthor(e.target.value)}
            />
          </StyledLabel>
          <StyledLabel>
            {'Publisher'}
            <Input
              type="text"
              placeholder="Pottermore Publishing"
              value={publisher}
              onChange={e => setPublisher(e.target.value)}
            />
          </StyledLabel>
          <StyledLabel>
            {'Language'}
            <Input
              type="text"
              placeholder="e.g. en, pl"
              value={language}
              onChange={e => setLanguage(e.target.value)}
            />
          </StyledLabel>
          <ButtonWrapper>
            <Button>Search</Button>
          </ButtonWrapper>
        </StyledForm>
        {error ? (
          <Status>{error}</Status>
        ) : (
          <CardWrapper>
            {renderingBooks
              .filter(book => (language !== '' ? book.volumeInfo.language === language : true))
              .map(book => {
                return (
                  <Card
                    key={book.id}
                    title={book.volumeInfo.title}
                    image={book.volumeInfo.imageLinks}
                    description={book.volumeInfo.description}
                  />
                );
              })}
            {loading && <Status>LOADING</Status>}
          </CardWrapper>
        )}
      </>
    </Wrapper>
  );
};

export default HomeView;
