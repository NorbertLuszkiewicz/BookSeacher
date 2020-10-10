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
  font-size: ${({ theme }) => theme.fontSize.s};
`;
const Button = styled.button`
  position: relative;
  width: 250px;
  font-size: ${({ theme }) => theme.fontSize.s};
  padding: 7px;
  background: none;
  border-radius: 10px;
  font-weight: bold;
  overflow: hidden;

  ::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #64b5f6;

    transform: translateY(100%);
    z-index: -1;
    transition: transform 0.3s ease;
  }

  :hover::before {
    transform: translateY(0);
  }
`;
const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const HomeView = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [publisher, setPublisher] = useState('');
  const [language, setLanguage] = useState('');

  const [bookState, setBookState] = useState([title, author, publisher]);

  const listOfBooks = useSelector(state => state.bookList);
  const { books, loading, error } = listOfBooks;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(bookList(title, author, publisher));
  }, [bookState]);

  const funckcjamoja = e => {
    e.preventDefault();
    setBookState([title, author, publisher]);
  };

  return loading ? (
    <div>LOADING ...</div>
  ) : (
    <Wrapper>
      <>
        <Logo src={logo} alt="book seacher logo" />
        <StyledForm onSubmit={e => funckcjamoja(e)}>
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
              placeholder="en"
              value={language}
              onChange={e => setLanguage(e.target.value)}
            />
          </StyledLabel>
          <ButtonWrapper>
            <Button>Search</Button>
          </ButtonWrapper>
        </StyledForm>
        <section>
          {error ? (
            <div>ERROR</div>
          ) : (
            books &&
            books.map(book => {
              return (
                <Card
                  key={book.id}
                  title={book.volumeInfo.title}
                  image={book.volumeInfo.imageLinks}
                  description={book.volumeInfo.description}
                />
              );
            })
          )}
        </section>
      </>
    </Wrapper>
  );
};

export default HomeView;
