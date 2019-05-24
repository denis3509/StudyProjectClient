import React from 'react'
import {connect} from 'react-redux'
import {compose, bindActionCreators} from 'redux'
import Dashboard from '../components'
import * as dashboardActions from '../logic/actions'


const mapStateToProps = (state) => {
  const {
    dashboardName,
    description,
    columns,
    error,
    isLoading
  } = state.dashboard;
  return {dashboardName, description, columns, error, isLoading}
};

const mapDispatchToProps = (dispatch) => ({
  dashboardActions: bindActionCreators(dashboardActions, dispatch),
});


const ContainerDashboard = WrappedComponent => {
  return class extends React.Component {
    componentDidMount() {
      const {dashboard_id} = this.props.match.params;
      this.props.dashboardActions.getDashboard(dashboard_id);
    }
    updateDashboard  = (update) => {
      const {dashboard_id} = this.props.match.params;
      this.props.dashboardActions.updateDashboard(dashboard_id,update);
    };
    render() {
      console.log(this.props);
      return (
        <WrappedComponent
          updateDashboard={this.updateDashboard}
          {...this.props}/>
      )
    }
  }
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  ContainerDashboard
)(Dashboard)