import React from 'react';
import styled from 'styled-components';
import logo from 'assets/logo.png';
import Input from 'components/Input/Input';

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

const HomeView = () => (
  <Wrapper>
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
      <div />
    </section>
  </Wrapper>
);

export default HomeView;
