import * as React from 'react';

export const Footer: React.FC<IFooterProps> = (props: IFooterProps) => {
    const {children, className} = props;
    return(
        <footer className={className}>{children}</footer>        
    );
}

export interface IFooterProps {
    children?: React.ReactNode;
    className?: string;
}