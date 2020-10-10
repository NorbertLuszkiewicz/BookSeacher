import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Wrapper = styled.div`
  width: 100%;
  border: 4px solid #fff77a;
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
  text-overflow: clip;
`;
const ParagraphWrapper = styled.div`
  height: 62px;
  width: 100%;
  overflow: hidden;
`;

const Img = styled.img`
  height: 192px;
`;

const Card = ({ title, image, description }) => {
  const noBookImage = 'https://cdn.pixabay.com/photo/2014/04/02/16/21/book-307045_960_720.png';

  return (
    <Wrapper>
      <Img src={image.thumbnail || noBookImage} alt={title} />
      <Title>{title}</Title>
      {description && (
        <ParagraphWrapper>
          <Paragraph>{description} </Paragraph>
        </ParagraphWrapper>
      )}
    </Wrapper>
  );
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string,
  description: PropTypes.string,
};

Card.defaultProps = {
  description: '',
  image: '',
};

export default Card;
