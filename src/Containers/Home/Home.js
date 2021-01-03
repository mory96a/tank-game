import React from 'react';
import StyledHome from "./Home.styles";
import SetupGame from "../../Components/GameSetup/GameSetup";

const Home = () => {
    return (
        <StyledHome>
            <h1>GAME SETUP</h1>
            <SetupGame/>
            <div className='d-flex flex-column align-items-center mt-5'>
                <h2 className='mb-3'>GameTips</h2>
                <h5 className='mb-4'>Each team can have 12 troops.</h5>
                <p>Soldiers housing space: 1</p>
                <p>Tanks housing space: 2</p>
                <p>Ships housing space: 3</p>
            </div>
        </StyledHome>
    );
};

export default Home;