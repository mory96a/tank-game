import React from 'react';
import StyledArea, { Row } from "./Area.styles";
import Cell from "../Cells/Cells";
import { battleAreaMaker, checkCoordinate, gridCreator } from '../../utils/functions';

const Area = ({army, side, clickAble, turn, attack, attackedLocations}) => {

    const sides = side === 'left' ? {border: 'right', attacked: 'playerTwo', attacker: 'playerOne'} : {
        border: 'left',
        attacked: 'playerOne',
        attacker: 'playerTwo'
    };
    const matrix = battleAreaMaker();
    const Rows = gridCreator(matrix);

    let reservedCoordinates = [];

    // eslint-disable-next-line array-callback-return
    army.map((troopObject) => {
        if (!troopObject.destroyed) {
            return troopObject.coordinates.map((coordinates) => {
                return reservedCoordinates.push(coordinates);
            });
        }
    });

    function handleAttack(x, y) {
        if (turn) {
            attack(sides.attacked, [49 - x, y], sides.attacker);
        } else {
            alert('play on ur turn !');
        }
    }

    return (
        <StyledArea side={sides}>
            {
                Rows.map((row, indexY) => (
                    <Row side={side} key={indexY}>
                        {
                            row.map((coordinate, index) => {
                                const exist = checkCoordinate([coordinate[0], coordinate[1]], reservedCoordinates);

                                const isAttacked = checkCoordinate([coordinate[0], coordinate[1]], attackedLocations);
                                let backgroundColor = 'white';

                                if (exist) {
                                    backgroundColor = 'blue';
                                    if (turn) {
                                        backgroundColor = 'white';
                                    }
                                }

                                if (isAttacked) {
                                    backgroundColor = 'red';
                                }

                                return (
                                    <Cell key={index}
                                          x={coordinate[0]}
                                          y={coordinate[1]}
                                          background={backgroundColor}
                                          canClick={clickAble}
                                          handleAttack={handleAttack}
                                    />
                                );
                            })
                        }
                    </Row>
                ))}
        </StyledArea>
    );
};

export default Area;