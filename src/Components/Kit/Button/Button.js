import React from 'react';
import StyledButton from "./Button.styles";

type Props = {
    height?: number | string,
    width?: number | string,
    color?: string,
    children: Element,
    name?: string
};

const Button = ({children, ...restPros}: Props) => {
    return (
        <StyledButton {...restPros}>
            {children}
        </StyledButton>
    );
};

export default Button;

