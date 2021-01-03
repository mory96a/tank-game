export const battleAreaMaker = () => {
    let matrix = [];
    for (let j = 0; j < 50; j++) {
        for (let i = 0; i < 50; i++) {
            matrix.push([i, j]);
        }
    }
    return matrix;
};

export const gridCreator = (matrix) => {
    let Rows = [];
    for (let j = 0; j < 50; j++) {
        const row = matrix.slice(j * 50, (j + 1) * 50);
        Rows.push(row);
    }
    return Rows;
}

const randNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
};

export const checkCoordinate = (curr, list) => {
    return !!list.find((coordinate) => {
        return (coordinate[0] === curr[0] && coordinate[1] === curr[1]);
    });
};

export const createTroops = (list, troopName) => {
    let X, Y;
    if (troopName === 'soldiers') {
        X = 2;
        Y = 2;
    } else if (troopName === 'ships') {
        X = 3;
        Y = 10;
    } else if (troopName === 'tanks') {
        X = 5;
        Y = 3;
    }

    let forbiddenCoordinates;
    let armyCoordinates;
    do {
        forbiddenCoordinates = list;
        armyCoordinates = [];
        const randLocation = [randNumber(5, 42), randNumber(5, 35)];
        if (!checkCoordinate(randLocation, forbiddenCoordinates)) {
            let exist = false;
            for (let j = 0; j < Y && !exist; j++) {
                for (let i = 0; i < X; i++) {
                    const newLoc = [randLocation[0] + i, randLocation[1] + j];
                    exist = checkCoordinate(newLoc, forbiddenCoordinates);
                    if (exist) {
                        break;
                    } else {
                        armyCoordinates.push(newLoc);
                        forbiddenCoordinates.push(newLoc);
                    }
                }
            }
        }
    } while (armyCoordinates.length < Y * X);
    return {forbiddenCoordinates, armyCoordinates};
};

export const armyCamp = (arrayOfArmy) => {
    let list = [];
    let armyCamp = [];

    arrayOfArmy.forEach((troop) => {
        for (let i = 0; i < 1 * troop[1]; i++) {
            const object = createTroops(list, troop[0]);
            const troopObject = {
                coordinates: object.armyCoordinates,
                destroyed: false
            }
            list.push(object.forbiddenCoordinates);
            armyCamp.push(troopObject);
        }
    });
    return armyCamp;
};

export const attackRedux = (playerObject, coordinate) => {
    let troopsArray = playerObject.troops;
    let attackedCoordinates = playerObject.attackedLocations;

    const index = troopsArray.findIndex((troop) => {
        return troop.coordinates.find((loc) => {
            return (coordinate[0] === loc[0] && coordinate[1] === loc[1]);
        });
    });

    if (index !== -1) {
        troopsArray[index].destroyed = true;
    }
    attackedCoordinates.push(coordinate);
    return {
        ...playerObject,
        troopsArray,
        attackedLocations: attackedCoordinates
    }
}

export const numOfRemainingTroops = (playerObject) => {
    const troops = playerObject.troops;
    const notDestroyed = troops.filter((troop) => {
        return troop.destroyed === false;
    });
    return notDestroyed.length;
};




