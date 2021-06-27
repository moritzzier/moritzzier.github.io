import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import IconLink from './IconLink';

describe('IconLink Element', () => {
    it('should be link element', () => {
        render(<IconLink href="Lulek" title="ThisIsATest">Test</IconLink>);
        expect(screen.getAllByRole('link'));
    })
})