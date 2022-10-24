import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ContactForm from '..';

afterEach(cleanup);

describe('Contact component', () => {
  // baseline test
  it('renders', () => {
    render(<ContactForm/>);
  });

  it('matches snapshot', () => {
    const { asFragment } = render(<ContactForm/>);

    expect(asFragment()).toMatchSnapshot();
  });
})

describe('shows text content', () => {
  it('text matches text content', () => {
    const { getByTestId } = render(<ContactForm/>);

    expect(getByTestId('contact')).toHaveTextContent('Contact me');

    expect(getByTestId('submit')).toHaveTextContent('Submit');
  })
})