import styled from 'styled-components';

const Button = styled.button`
  position: relative;
  width: 250px;
  font-size: ${({ theme }) => theme.fontSize.m};
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
    background-color: ${({ theme }) => theme.Primary};
    transform: translateY(100%);
    z-index: -1;
    transition: transform 0.3s ease;
  }

  :hover::before {
    transform: translateY(0);
  }
`;

export default Button;
