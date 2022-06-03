import React from 'react';
import { render, screen } from '@testing-library/react';
import MSlideItem from './MSlideItem';

test('renders to test children', () => {
    const { rerender } = render(<MSlideItem id={1}></MSlideItem>);
    expect(screen.getByTestId('MSlideItem')).toHaveTextContent('');

    // Render with children props
    rerender(
        <MSlideItem id={1}>
            <div>1</div>
        </MSlideItem>
    );
    expect(screen.getByTestId('MSlideItem')).toHaveTextContent(/1/);
});
