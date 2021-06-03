import * as React from 'react';


export const IconButton: React.FC<IIconButtonProps> = (props: IIconButtonProps) => {
    const {onClick, children} = props;
    return(
        <button onClick={onClick}>
            <span>
                {children}
            </span>
        </button>
    );
}

export interface IIconButtonProps {
    onClick?: () => void;
    children?: React.ReactNode;
}

export default IconButton