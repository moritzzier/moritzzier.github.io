import * as React from 'react';

const ContentBox: React.FC<IContentBoxProps> = (props: IContentBoxProps) => {
    const {children} = props;
    return(
        <div className="xl:pl-64 lg:pl-32 lg:max-w-4xl md:pl-12 max-w-2xl px-8">
            {children}
        </div>
    );
}

export interface IContentBoxProps {
    children?: React.ReactNode;
}

export default ContentBox