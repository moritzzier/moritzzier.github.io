import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Footer } from './Footer';

describe('Footer Element', () => {
    it('should contain footer element', () => {
        render(<Footer/>)
        expect(screen.getByRole('contentinfo'));
    })
})