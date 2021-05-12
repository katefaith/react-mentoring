import React from 'react';
import { render, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { MovieForm } from './Form';

describe('MovieForm', () => {
  const middlewares = [];
  const mockStore = configureStore(middlewares);

  test('onSubmit', async () => {
    const initialState = {};
    const store = mockStore(initialState);
    const onSubmit = jest.fn();

    const { getByLabelText, getByRole, getByText } = render(
      <Provider store={store}>
        <MovieForm title="form title" btnText="submit" onSubmit={onSubmit} />
      </Provider>,
    );

    userEvent.type(getByLabelText(/title/i), 'Movie title');
    userEvent.type(getByLabelText(/release date/i), '2020-01-01');
    userEvent.type(getByLabelText(/movie url/i), 'http://google.com');
    userEvent.click(getByText(/comedy/i));
    userEvent.type(getByLabelText(/tagline/i), 'Movie tagline');
    userEvent.type(getByLabelText(/overview/i), 'Movie overview');
    userEvent.type(getByLabelText(/runtime/i), '90');
    userEvent.click(getByRole('button', { name: /submit/i }));

    await waitFor(
      () => expect(onSubmit).toHaveBeenCalledWith({
        title: 'Movie title',
        release_date: '2020-01-01',
        poster_path: 'http://google.com',
        genres: [''],
        tagline: 'Movie tagline',
        overview: 'Movie overview',
        runtime: 90,
      },
      expect.anything()),
    );
  });
});
