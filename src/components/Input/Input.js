import styled, { css } from 'styled-components';
import magnifierIcon from 'assets/magnifier.svg';

const Input = styled.input`
  height: 30px;
  margin: 0 10px;
  border-radius: 40px;
  font-size: ${({ theme }) => theme.fontSize.xs};
  padding-left: 15px;
  ::placeholder {
    color: #aaa;
  }

  @media (min-width: 1000px) {
    width: 250px;
  }

  ${({ search }) =>
    search &&
    css`
      font-size: ${({ theme }) => theme.fontSize.xxs};
      background-image: url(${magnifierIcon});
      background-repeat: no-repeat;
      background-position: 10px;
      padding-left: 30px;

      @media (min-width: 1000px) {
        width: 500px;
      }
    `};
`;

export default Input;
