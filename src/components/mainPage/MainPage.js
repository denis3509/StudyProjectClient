import React, {Component} from 'react'
import Grid from '@material-ui/core/Grid'
import CardList from './CardList'
import Typography from '@material-ui/core/Typography'
import LeftMenu from './LeftMenu'

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
    name: 'Главная', href: '',
  },
  {
    name: 'Доски', href: ''
  },
  {
    name: 'Профиль', href: ''
  }
];



class MainPage extends Component {
  constructor(state) {
    super(state);
  }

  render() {

    return (
      <Grid container direction="row" justify="center"  spacing={16}>
        <Grid item xs={3} key="1" >
          <LeftMenu
            listItems={listItems}
          />
        </Grid>
        <Grid item xs={9} key="2">
          <Typography>Доски</Typography>

          <CardList
            dashboardList={dashboardList}
          />

        </Grid>
      </Grid>
    )
  }
}

export default MainPage