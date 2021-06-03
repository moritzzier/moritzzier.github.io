import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import IconButton from './IconButton';

describe('IconButton Element', () => {
    it('should emit onClick when clicked', () => {
        const onClickHandler = jest.fn();
        render(<IconButton onClick={onClickHandler}/>);

        expect(screen.getByRole('button'));

        userEvent.click(screen.getByRole('button'));
        expect(onClickHandler).toHaveBeenCalledTimes(1);
    })

    it('should render text inside', () => {
        render(<IconButton>Test</IconButton>);
        expect(screen.getAllByText('Test'));
    })
})