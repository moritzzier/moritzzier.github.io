import * as React from 'react';

export const FooterContent: React.FC<IFooterContentProps> = (props: IFooterContentProps) => {
    return(
        <p className="text-typo-dark bg-paper text-center">Copyright &copy; Moritz Zier 2021. All rights reserved.</p>
    );
}

export interface IFooterContentProps {}

export default FooterContent;