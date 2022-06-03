import React from 'react';
import { render, screen } from '@testing-library/react';
// import MSlideItem from './MSlideItem';

test('renders learn react link', () => {
    const { rerender } = render(<MSlideItem />);
    const linkElement = screen.getByText(/div/i);
    expect(linkElement).toBeInTheDocument();
});
