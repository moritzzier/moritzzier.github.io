import * as React from 'react';

export const Footer: React.FC<IFooterProps> = (props: IFooterProps) => {
    const {children} = props;
    return(
        <footer>{children}</footer>        
    );
}

export interface IFooterProps {
    children?: React.ReactNode;
}