import React from 'react';
import StyledMessage from "./Message.styles";

type Props = {
    className?: string,
    message: string
};

const Message = ({className, message, type}: Props) => {
    return (
        <StyledMessage className={`${className} bg-${type}`}>
            <h6>{message}</h6>
        </StyledMessage>
    );
};

export default Message;