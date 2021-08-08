import { render, screen } from '@testing-library/react';
import Header from './Header'
describe('Header Element', () => {
    it('should render children', () => {
        render(<Header>Test123</Header>)
        expect(screen.getByText('Test123'));
    })
})