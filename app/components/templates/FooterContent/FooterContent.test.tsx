import { render, screen } from '@testing-library/react';
import FooterContent from './FooterContent';

describe('FooterContent Template', () => {
    it('should contain copyright', () => {
        render(<FooterContent />);
        expect(screen.getByText(/copyright/));
    })
})