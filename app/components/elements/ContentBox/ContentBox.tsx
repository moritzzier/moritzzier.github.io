import * as React from 'react';

const ContentBox: React.FC<IContentBoxProps> = (props: IContentBoxProps) => {
    const {children} = props;
    return(
        <div className="lg:pl-32 md:pl-12 px-8 pt-32 ">
            {children}
        </div>
    );
}

export interface IContentBoxProps {
    children?: React.ReactNode;
}

export default ContentBox