import React, {Component} from 'react'
import Grid from '@material-ui/core/Grid'
import DashboardList from './dashboardList/DashboardList'
import Typography from '@material-ui/core/Typography'
import LeftMenu from './LeftMenu'
import Feed from './feed/Feed'
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import Profile from "./profile/Profile";


const dashboardList = [
  {
    name: "client",
    description: "",
    users: [],
  },
  {
    name: "server",
    description: "",
    users: [],
  },
  {
    name: "database",
    description: "",
    users: [],
  },

];

const listItems = [
  {
    name: 'Главная', href: '/home/feed',
  },
  {
    name: 'Доски', href: '/home/dashboardList'
  },
  {
    name: 'Профиль', href: '/home/profile'
  }
];



const MainPage  = (props) => {



    const {match} =  props;

    return (
      <Grid container direction="row" justify="center"  spacing={16}>
        <Grid item xs={3} key="1" >
          <LeftMenu
            listItems={listItems}
          />
        </Grid>
        <Grid item xs={9} key="2">
          <Route exact path={`${match.url}/`} component={DashboardList}/>
          <Route path={`${match.url}/dashboardList`} component = {DashboardList}/>
          <Route path={`${match.url}/feed`} component = {Feed}/>
          <Route path={`${match.url}/profile`} component = {Profile}/>
        </Grid>
      </Grid>
    )

};

export default MainPage