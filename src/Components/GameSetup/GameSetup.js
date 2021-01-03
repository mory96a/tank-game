import React, { useEffect, useState } from 'react';
import StyledGameSetup from "./GameSetup.styles";
import { useHistory } from "react-router-dom";

import Input from "../Kit/Input/FormInput";
import Select from "../Kit/Select/Select";
import Button from "../Kit/Button/Button";
import Message from "../Kit/Message/Message";

import { createGame } from '../../redux/Modules/setupGame';
import { connect } from 'react-redux';

const GameSetup = ({createGame, gameSetup}) => {
    let history = useHistory();
    const [setup, setSetup] = useState({playerOne: '', playerTwo: '', soldiers: 1, tanks: 1, ships: 1});
    const [message, setMessage] = useState({message: '', type: ''});

    useEffect(() => {
        const remaining = 12 - parseInt(setup.soldiers) - setup.tanks * 2 - setup.ships * 3;
        if (remaining === 0) {
            setMessage({message: 'ready to battle!', type: 'success'});
        } else if (remaining > 0) {
            setMessage({message: `you need ${remaining} more troops.`, type: 'danger'})
        } else if (remaining < 0) {
            setMessage({message: `you have ${-1 * remaining} extra troops.`, type: 'danger'})
        }
    }, [setup]);

    function handleSubmit(event) {
        event.preventDefault();
        const elements = event.target.elements;
        const formValues = {
            playerOne: elements.playerOne.value,
            playerTwo: elements.playerTwo.value,
            army: {
                soldiers: elements.soldiers.value,
                tanks: elements.tanks.value,
                ships: elements.ships.value
            },
        };
        if (message.type === 'success') {
            createGame(formValues);
            history.push('/preparation')
        }
    }

    function handleChange(event) {
        const {name, value} = event.target;
        setSetup({
            ...setup,
            [name]: value
        });
    }

    return (
        <StyledGameSetup>
            <form onSubmit={handleSubmit}>
                <Input className='my-4' type='text' name='playerOne' value={setup.playerOne} label='player 1'
                       handleChange={handleChange}/>
                <Input className='mb-5 mt-4' type='text' name='playerTwo' value={setup.playerTwo} label='player 2'
                       handleChange={handleChange}/>
                <div className='d-flex mb-4'>
                    <Select handleChange={handleChange} className='mx-4' name='soldiers' options={[1, 2, 3, 4]}/>
                    <Select handleChange={handleChange} className='mx-4' name='tanks' options={[1, 2, 3]}/>
                    <Select handleChange={handleChange} className='mx-4' name='ships' options={[1, 2, 3]}/>
                </div>

                <Message className='mt-4 p-2' message={message.message} type={message.type}/>

                <Button type='submit' className='mt-5' height={100} width={250} color='white'>
                    START GAME
                </Button>
            </form>
        </StyledGameSetup>
    );
};

const mapDispatchToProps = (dispatch) => ({
    createGame: (formValues) => dispatch(createGame(formValues))
});

const mapStateToProps = (state) => ({
    gameSetup: state.setupGame.setup
});

export default connect(mapStateToProps, mapDispatchToProps)(GameSetup);