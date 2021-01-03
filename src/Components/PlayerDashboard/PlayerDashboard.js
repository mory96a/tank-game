import React from 'react';
import StyledDashboard from "./PlayerDashboard.styles";

const PlayerDashboard = ({playerName, remaining, turn}) => {

    return (
        <StyledDashboard>
            <div className='w-50 h-100 p-3'>
                <h2 className='mb-4'>{playerName}'s Area</h2>
                <h5 className='w-75 p-2 border border-dark text-center'>life Remaining: {remaining}</h5>
            </div>
            <div className='w-50 h-100 d-flex align-items-center'>
                {turn ? (<h3 className='m-3 p-2 bg-success'>Its your turn!</h3>) : (
                    <h3 className='m-3 p-2 bg-danger'>Its not your turn!</h3>)}
            </div>
        </StyledDashboard>
    );
};

export default PlayerDashboard;