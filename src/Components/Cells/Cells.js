import React from 'react';
import StyledCell from "./Cell.styles";

const Cell = ({x, y, background, canClick,handleAttack}) => {

    function handleClick() {
        if(canClick){
            handleAttack(x, y);
        }
    }

    return (
        <StyledCell backgroundColor={background} onClick={handleClick}/>
    );
};

export default Cell;