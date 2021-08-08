import { render, screen } from '@testing-library/react';
import Section from './Section'
describe('Section Element', () => {
    it('should render children', () => {
        render(<Section><span>Test123</span></Section>)
        expect(screen.getByText('Test123'));
    })
})