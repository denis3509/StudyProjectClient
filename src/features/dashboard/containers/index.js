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

    updateDashboard = (update) => {
      const {dashboard_id} = this.props.match.params;
      this.props.dashboardActions.updateDashboard(dashboard_id, update);
    };

    newColumn = (columnName) => {
      const {dashboard_id} = this.props.match.params;
      this.props.dashboardActions.newColumn(dashboard_id, {columnName});
    };

    removeColumn = (column_id) => {
      const {dashboard_id} = this.props.match.params;
      this.props.dashboardActions.removeColumn(dashboard_id,column_id)
    };

    newCard = (column_id) => (cardName) => {
      const {dashboard_id} = this.props.match.params;
      this.props.dashboardActions.newCard(dashboard_id, column_id, {cardName});
    };
    updateCard = (column_id) => (card_id)=> update => {
      const {dashboard_id} = this.props.match.params;
      this.props.dashboardActions.newCard(dashboard_id, column_id, card_id, update);
    };
    removeCard = (column_id) => (card_id) => {
      const {dashboard_id} = this.props.match.params;
      this.props.dashboardActions.newCard(dashboard_id, column_id, card_id);
    };

    render() {

      return (
        <WrappedComponent
          newColumn={this.newColumn}
          newCard={this.newCard}
          updateCard={this.updateCard}
          removeCard={this.removeCard}
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