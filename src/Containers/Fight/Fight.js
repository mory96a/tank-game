import React from 'react';
import StyledFight, { StyledContainer, StyledPlayersContainer } from "./Fight.styles";
import { connect } from 'react-redux';
import PlayerDashboard from "../../Components/PlayerDashboard/PlayerDashboard";
import Area from "../../Components/Area/Area";
import { numOfRemainingTroops } from "../../utils/functions";
import { attackPlayer } from "../../redux/Modules/players";

const Fight = ({playerOne, playerTwo, turn, attack}) => {
    console.log(playerOne,playerTwo)
    return (
        <StyledFight>
            <StyledPlayersContainer>
                <PlayerDashboard playerName={playerOne.name} remaining={numOfRemainingTroops(playerOne)} turn={turn}/>
                <PlayerDashboard playerName={playerTwo.name} remaining={numOfRemainingTroops(playerTwo)} turn={!turn}/>
            </StyledPlayersContainer>

            <StyledContainer>
                <Area
                    army={playerOne.troops}
                    side='left'
                    clickAble={true}
                    turn={turn}
                    attack={attack}
                    attackedLocations={playerOne.attackedLocations}
                />
                <Area
                    army={playerTwo.troops}
                    side='right'
                    clickAble={true}
                    turn={!turn}
                    attack={attack}
                    attackedLocations={playerTwo.attackedLocations}
                />
            </StyledContainer>
        </StyledFight>
    );
};

const mapStateToProps = (state) => ({
    playerOne: state.players.playerOne,
    playerTwo: state.players.playerTwo,
    turn: state.players.turn
});

export default connect(mapStateToProps, {attack: attackPlayer})(Fight);