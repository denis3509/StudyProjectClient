import React, {Component, Fragment} from 'react'
import DashboardCard from './DashboardCard'
import Grid from '@material-ui/core/Grid'
import {connect} from 'react-redux'
import {fetchDashboardList} from "../../../actions/mainPageActions";

const DashboardList = ({items,fetchDashboardList}) => {
  fetchDashboardList();
  return (
    <Grid container spacing={16}>
      {
        items.map((dashboardInfo) => {
          return (
            <Grid item direction="row">
              <DashboardCard
                key={dashboardInfo.id + 'dl'}
                name={dashboardInfo.name}
                description={dashboardInfo.description}
                picture={dashboardInfo.picture}
                id={dashboardInfo.id}
              /></Grid>)
        })}
    </Grid>
  )

};
const mapStateToProps = state => ({
  items: state.mainPage.dashboardList.items,
});
const mapDispatchToProps= dispatch => ({
  fetchDashboardList : ()=> dispatch(fetchDashboardList())
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DashboardList)


