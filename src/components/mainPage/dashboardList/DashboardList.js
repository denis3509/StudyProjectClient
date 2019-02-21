import React, {Component, Fragment} from 'react'
import DashboardCard from './DashboardCard'
import Grid from '@material-ui/core/Grid'


class DashboardList extends Component {
  constructor(state) {
    super(state);
  }

  render() {
    //const {dashboardList} = this.props;

    const dashboardList = [
      {
        name: "client",
        id: 1,
        description: "",
        users: [],
      },
      {
        name: "server",
        id : 2,
        description: "",
        users: [],
      },
      {
        name: "database",
        id : 3,
        description: "",
        users: [],
      },

    ];
    return (
      <Grid container spacing={16}>
        {

          dashboardList.map((dashboardInfo) => {
          return (
            <Grid item direction="row"  >
              <DashboardCard
                name={dashboardInfo.name}
                description={dashboardInfo.description}
                picture={dashboardInfo.picture}
                id={dashboardInfo.id}
              /></Grid>)
        })}
      </Grid>
    )
  }
}

export default DashboardList