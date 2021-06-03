import { render, screen } from '@testing-library/react';
import { DefaultLayout } from './DefaultLayout';

describe('DefaultLayout Layout', () => {
    it('should contain nav, main and footer', () => {
        render(<DefaultLayout />)
        expect(screen.getByRole('navigation'));
        expect(screen.getByRole('main'));
        expect(screen.getByRole('contentinfo')); //footer
    })

    it('should render its children', () => {
        render(<DefaultLayout><button>Test</button></DefaultLayout>);
        expect(screen.getByRole('button', {name: 'Test'}));
    })
})