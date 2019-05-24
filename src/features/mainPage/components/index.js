import React, {useState} from 'react'
import Grid from '@material-ui/core/Grid'
import DashboardList from './dashboardList'
import Typography from '@material-ui/core/Typography'
import LeftMenu from './LeftMenu'
import Feed from './feed/Feed'
import {BrowserRouter as Router, Route, Link, Redirect} from "react-router-dom";
import Profile from "./profile/Profile";
import styled from 'styled-components'
import Modal from "../../../UI/modals/Modal";


const MainPage = (props) => {

  const {match, dashboardList} = props;


  return (
    <S.Wrapper>
      <S.Left>
        <LeftMenu
          match={match}
        />
      </S.Left>
      <S.Center>
        <Route exact path={`${match.url}/`}
               render={() => <Redirect to={`${match.url}/dashboardList`}/>}/>

        <Route exact path={`${match.url}/dashboardList`}
               render={(props) => <DashboardList {...props} dashboardList={dashboardList}/>}/>
        <Route path={`${match.url}/feed`} component={Feed}/>
        <Route path={`${match.url}/profile`} component={Profile}/>
      </S.Center>
      <S.Right>
      </S.Right>

    </S.Wrapper>
  )

};
const S = {};
S.Wrapper = styled.div`
margin-top : 30px;
display : flex;
flex-direction : row;
`
S.Left = styled.div`
display : flex;
flex :3;
justify-content : flex-end;
`;
S.Center = styled.div`
display : flex;
flex :4;
justify-content: flex-start;
`;
S.Right = styled.div`
display : flex;
flex :2;
`

export default MainPage