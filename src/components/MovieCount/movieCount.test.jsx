import React from 'react';
import { render } from '@testing-library/react';
import { MovieCount } from './movieCount';

describe('MovieCount', () => {
  test('render  correctly', () => {
    const { container } = render(<MovieCount moviesCount={5} />);
    expect(container).toMatchSnapshot();
  });
});