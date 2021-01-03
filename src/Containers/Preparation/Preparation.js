import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import { connect } from 'react-redux';
import StyledPreparation, { StyledArea, StyledAreaContainer, StyledDiv } from "./Preparation.styles";
import Area from "../../Components/Area/Area";
import { armyCamp } from "../../utils/functions";
import Button from "../../Components/Kit/Button/Button";
import { createPlayers } from '../../redux/Modules/players';
import SideArea from "../../Components/SideArea/SideArea";

const Preparation = ({gameSetup, createPlayers}) => {
    let history = useHistory();

    function handleRefresh(event) {
        const {name} = event.target;
        setRefresh({
            ...refresh,
            [name]: armyCamp(armyArray)
        });
    }

    const armyArray = Object.entries(gameSetup.army);
    const [refresh, setRefresh] = useState({
            playerOneArmy: armyCamp(armyArray),
            playerTwoArmy: armyCamp(armyArray)
        }
    );

    function startGame() {
        const playerOne = {
            name: gameSetup.playerOne,
            troops: refresh.playerOneArmy,
            attackedLocations: []
        };
        const playerTwo = {
            name: gameSetup.playerTwo,
            troops: refresh.playerTwoArmy,
            attackedLocations: []
        };
        createPlayers([playerOne, playerTwo]);
        history.push('/fight');
    }

    function handleDragAble() {

    }

    return (
        <StyledPreparation>
            <StyledDiv>
                <div className='d-flex align-items-center justify-content-between h-50 w-25 '>
                    <h3>{gameSetup.playerOne}'s side</h3>
                    <Button height={30} width={100} onClick={handleRefresh} name='playerOneArmy'>REFRESH</Button>
                    <Button height={30} width={100} onClick={handleDragAble} name='playerOneArmy'>DragAble</Button>
                </div>

                <div className='d-flex align-items-center justify-content-center h-50 w-25 '>
                    <Button height={30} width={200} name='playerTwoArmy' onClick={startGame}>START BATTLE</Button>
                </div>

                <div className='d-flex align-items-center justify-content-between h-50 w-25 '>
                    <h3>{gameSetup.playerTwo}'s side</h3>
                    <Button height={30} width={100} onClick={handleRefresh} name='playerTwoArmy'>REFRESH</Button>
                    <Button height={30} width={100} onClick={handleDragAble} name='playerOneArmy'>DragAble</Button>
                </div>
            </StyledDiv>

            <StyledArea>
                <SideArea> </SideArea>
                <StyledAreaContainer>
                    <Area army={refresh.playerOneArmy} side='left' clickAble={false} attackedLocations={[]}/>
                    <Area army={refresh.playerTwoArmy} side='right' clickAble={false} attackedLocations={[]}/>
                </StyledAreaContainer>
                <SideArea> </SideArea>
            </StyledArea>
        </StyledPreparation>
    );
};

const mapStateToProps = (state) => ({
    gameSetup: state.setupGame.setup
});

const mapDispatchToProps = dispatch => ({
    createPlayers: players => dispatch(createPlayers(players))
});

export default connect(mapStateToProps, mapDispatchToProps)(Preparation);