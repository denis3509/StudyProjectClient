import React, {Component, Fragment} from 'react'
import DashboardCard from './DashboardCard'
import Grid from '@material-ui/core/Grid'


class CardList extends Component {
  constructor(state) {
    super(state);
  }

  render() {
    const {dashboardList} = this.props;
    return (
      <Grid container spacing={16}>
        {dashboardList.map((dashboardInfo) => {
          return (
            <Grid item direction="row">
              <DashboardCard
                name={dashboardInfo.name}
                description={dashboardInfo.description}
                picture={dashboardInfo.picture}

              /></Grid>)
        })}
      </Grid>
    )
  }
}

export default CardList