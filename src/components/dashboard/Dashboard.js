import React from 'react'
import Grid from '@material-ui/core/Grid'
import DashboardColumn from './DashboardColumn'

const columns = [1, 2, 3, 4]


class Dashboard extends React.Component {
  constructor(state) {
    super(state);
  }

  render() {
    return (
      <Grid container spacing={0} direction="row">
        {
          columns.map((column) => {
              return (
                <Grid item xs={2}>
                  <DashboardColumn/>
                </Grid>
              )

            }
          )
        }

        }

      </Grid>
    )
  }

}

export default Dashboard