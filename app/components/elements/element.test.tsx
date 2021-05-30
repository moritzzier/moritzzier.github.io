import {render, screen} from '@testing-library/react';
import TestElement from './element';


describe('test test', () => {
    it('runs the test', () => {
        render(<TestElement />);

        expect(screen.getAllByText('Test'));
    })
})