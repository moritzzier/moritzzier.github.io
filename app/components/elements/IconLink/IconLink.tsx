import * as React from 'react';


export const IconLink: React.FC<IIconLinkProps> = (props: IIconLinkProps) => {
    const {href, title, children} = props;
    return(
        <a href={href} title={title}>
                {children}
        </a>
    );
}

export interface IIconLinkProps {
    href: string;
    title: string;
    children?: React.ReactNode;
}

export default IconLink