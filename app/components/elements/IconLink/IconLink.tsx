import * as React from 'react';

export const IconLink: React.FC<IIconLinkProps> = (props: IIconLinkProps) => {
    const {href, title, children} = props;
    return(
        <a href={href} title={title}>
            <span className="flex h-12 w-12 bg-background rounded-full items-center justify-center text-typo-dark">
                {children}
            </span>
        </a>
    );
}

export interface IIconLinkProps {
    href: string;
    title: string;
    children?: React.ReactNode;
}

export default IconLink