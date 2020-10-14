import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { theme } from 'theme/mainTheme';
import { ThemeProvider } from 'styled-components';
import Card from 'components/Card/Card';

const renderCard = props => {
  const untils = render(
    <ThemeProvider theme={theme}>
      <Card title="Title" {...props} />
    </ThemeProvider>,
  );
  const card = untils.getByTestId(/card/i);

  return { ...untils, card };
};

describe('Card component', () => {
  it('renders card element', () => {
    const { card } = renderCard();

    expect(card).toBeInTheDocument();
  });

  describe('Title element', () => {
    it('renders img element', () => {
      const { getByTestId } = renderCard();

      expect(getByTestId(/title/i)).toBeInTheDocument();
    });

    it('displays proper value', () => {
      const { getByTestId, getByText, rerender } = renderCard();

      expect(getByTestId(/title/i)).toBeInTheDocument();

      let introducedTitle = 'Harry Potter';

      rerender(
        <ThemeProvider theme={theme}>
          <Card title={introducedTitle} />
        </ThemeProvider>,
      );

      expect(getByText(introducedTitle));

      introducedTitle = 'Flowers';

      rerender(
        <ThemeProvider theme={theme}>
          <Card title={introducedTitle} />
        </ThemeProvider>,
      );

      expect(getByText(introducedTitle));
    });
  });

  describe('Img element', () => {
    it('renders img element', () => {
      const { getByTestId } = renderCard();

      expect(getByTestId(/img/i)).toBeInTheDocument();
    });

    it('displays proper value', () => {
      const { getByTestId, rerender } = renderCard();

      expect(getByTestId(/img/i)).toHaveAttribute(
        'src',
        'https://cdn.pixabay.com/photo/2014/04/02/16/21/book-307045_960_720.png',
      );

      rerender(
        <ThemeProvider theme={theme}>
          <Card
            title="Title"
            image={{
              thumbnail: 'https://i.imgur.com/uKIXHV5.png',
            }}
          />
        </ThemeProvider>,
      );

      expect(getByTestId(/img/i)).toHaveAttribute('src', 'https://i.imgur.com/uKIXHV5.png');
    });
  });

  describe('Paragraph element', () => {
    it('renders paragraph element', () => {
      const { getByTestId } = render(
        <ThemeProvider theme={theme}>
          <Card title="Title" description="description" />
        </ThemeProvider>,
      );

      expect(getByTestId(/paragraph/i)).toBeInTheDocument();
    });

    it('displays proper value', () => {
      let descriptionValue = 'description';

      const { getByText, rerender } = render(
        <ThemeProvider theme={theme}>
          <Card title="Title" description="description" />
        </ThemeProvider>,
      );

      expect(getByText(descriptionValue));

      descriptionValue = 'nextDescription';

      rerender(
        <ThemeProvider theme={theme}>
          <Card title="Title" description={descriptionValue} />
        </ThemeProvider>,
      );

      expect(getByText(descriptionValue));
    });
  });
});
