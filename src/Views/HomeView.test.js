import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from 'store';
import { theme } from 'theme/mainTheme';
import { ThemeProvider } from 'styled-components';
import HomeView from 'Views/HomeView';

jest.mock('axios');

const renderHomeView = props => {
  const untils = render(
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <HomeView {...props} />
      </ThemeProvider>
    </Provider>,
  );
  const homeView = untils.getByTestId(/home/i);

  return { ...untils, homeView };
};

describe('HomeView View', () => {
  it('renders Wrapper element', () => {
    const { homeView } = renderHomeView();

    expect(homeView).toBeInTheDocument();
  });

  it('renders img element', () => {
    const { getByTestId } = renderHomeView();

    expect(getByTestId(/logo/i)).toBeInTheDocument();
    expect(getByTestId(/logo/i)).toHaveAttribute('src', 'logo.png');
  });
});
