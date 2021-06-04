import * as React from 'react';

export const NavBar: React.FC<INavBarProps> = (props: INavBarProps) => {
    const {children} = props;
    return(
        <nav className="bg-paper">
            {children}
        </nav>
    );
}

export interface INavBarProps {
    children?: React.ReactNode;
}

export default NavBar;