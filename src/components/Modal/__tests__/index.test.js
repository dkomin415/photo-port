import React from "react";
import { render, cleanup, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Modal from "..";

const mockToggleModal = jest.fn();

const currentPhoto = {
  name: 'Park bench',
  category: 'landscape',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
  index: 1
};

afterEach(cleanup);

describe('Modal component', () => {
  it('renders', () => {
    render(<Modal
    currentPhoto={currentPhoto}
    onClose={mockToggleModal}
    />)
  })

  // snapshot test
  it('matches snapshot DOM node structure', () => {
    const { asFragment } = render(<Modal 
      currentPhoto={currentPhoto}
      onClose={mockToggleModal}
    />);

    expect(asFragment()).toMatchSnapshot();
  });
})

describe('Click Event', () => {
  it('calls onClose handler', () => {
    // Arrange
    const { getByText } = render(<Modal
      onClose={mockToggleModal}
      currentPhoto={currentPhoto}
    />);
    
    // act
    fireEvent.click(getByText('Close this modal'));

    // assert
    expect(mockToggleModal).toHaveBeenCalledTimes(1);
  });
})