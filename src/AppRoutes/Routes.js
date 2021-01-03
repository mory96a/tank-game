import React from "react";
import { Route, Switch, Redirect } from "react-router";
import Home from "../Containers/Home/Home";
import Preparation from "../Containers/Preparation/Preparation";
import styled from 'styled-components';
import Fight from "../Containers/Fight/Fight";
import { connect } from "react-redux";

const StyledContainer = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
`;

const Routes = ({gameSetup}) => {

    return (
        <StyledContainer>
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route exact path='/preparation'
                       render={() => gameSetup.length === 0 ? <Redirect to='/'/> : <Preparation/>}/>
                <Route exact path='/fight' component={Fight}/>
            </Switch>
        </StyledContainer>
    );
};

const mapStateToProps = (state) => ({
    gameSetup: state.setupGame.setup
});

export default connect(mapStateToProps, null)(Routes);