import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  border: 1px solid green;
  border-radius: 10px;
  padding: 10px;
  text-align: center;
  margin: 10px auto;
`;

const Title = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.m};
  margin: 10px 0;
`;

const Paragraph = styled.p`
  font-size: ${({ theme }) => theme.fontSize.s};
  margin: 5px 0;
`;

const Card = ({ title, author, image, language, publishedDate }) => (
  <Wrapper>
    <img src={image} alt={title} />
    <Title>{title}</Title>
    <Paragraph>Author: {author}</Paragraph>
    <Paragraph>language: {language}</Paragraph>
    <Paragraph>published: {publishedDate}</Paragraph>
  </Wrapper>
);

export default Card;
