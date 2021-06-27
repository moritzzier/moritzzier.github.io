import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import NavBar from './NavBar';

describe('NavBar Element', () => {
    it('should be a nav element',() => {
        render(<NavBar/>);
        expect(screen.getByRole('navigation'));
    })
    it('should render links', () => {
        render(<NavBar menuItems={[{href: 'test', name: 'test', icon: <div></div>}]}></NavBar>);
        expect(screen.getByRole('link', {name: 'test'}));
    })
})