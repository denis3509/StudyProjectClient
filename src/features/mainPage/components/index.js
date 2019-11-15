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
    <div className="main-page">
      <div className="left">
        <LeftMenu className="left-menu"
                  match={match}
        />
      </div>
      <div className="center">
          <Route exact path={`${match.url}/`}
                 render={() => <Redirect to={`${match.url}/dashboardList`}/>}/>

          <Route exact path={`${match.url}/dashboardList`}
                 render={(props) => <DashboardList {...props} dashboardList={dashboardList}/>}/>
          <Route path={`${match.url}/feed`} component={Feed}/>
          <Route path={`${match.url}/profile`} component={Profile}/>
      </div>
      <div className="right">
      </div>

    </div>
  )

};
const S = {};
S.Wrapper = styled.div`
margin-top : 30px;
 
`;



export default MainPage