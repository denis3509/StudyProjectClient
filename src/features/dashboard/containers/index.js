import React from 'react'
import {connect} from 'react-redux'
import {compose, bindActionCreators} from 'redux'
import Dashboard from '../components'
import * as dashboardActions from '../logic/actions'
import * as cardActions from '../logic/cardFull/cardFullActions'

const mapStateToProps = (state) => {
  const {
    dashboardName,
    description,
    columns,
    cardOpen,
    error,
    isLoading,
    columnsDnD,
  } = state.dashboard;
  return {dashboardName, description, columns, error, isLoading, cardOpen, columnsDnD}
};

const mapDispatchToProps = (dispatch) => ({
  dashboardActions: bindActionCreators(dashboardActions, dispatch),
  cardActions: bindActionCreators(cardActions, dispatch)
});


const ContainerDashboard = WrappedComponent => {
  return class extends React.Component {


    componentDidMount() {
      this.getDashboard();
    }

    getDashboard = () => {
      const {dashboard_id} = this.props.match.params;
      this.props.dashboardActions.getDashboard(dashboard_id);
    };
    refreshDashboard = ()=> {
      const {dashboard_id} = this.props.match.params;
      this.props.dashboardActions.refreshDashboard(dashboard_id);
    };

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
      this.props.dashboardActions.removeColumn(dashboard_id, column_id)
    };

    getCard = (column_id) => (card_id) => {
      const {dashboard_id} = this.props.match.params;
      this.props.cardActions.getCard(dashboard_id, column_id, card_id);
    };

    newCard = (column_id) => (cardName) => {
      const {dashboard_id} = this.props.match.params;
      this.props.cardActions.newCard(dashboard_id, column_id, {cardName});
    };
    updateCard = (column_id) => (card_id) => update => {
      const {dashboard_id} = this.props.match.params;

      this.props.cardActions.updateCard(dashboard_id, column_id, card_id, update);
    };
    removeCard = (column_id) => (card_id) => {
      const {dashboard_id} = this.props.match.params;
      this.props.cardActions.removeCard(dashboard_id, column_id, card_id);
    };
    setCardOpen =   (column_id) => card_id => {
      const {dashboard_id} = this.props.match.params;
      this.props.dashboardActions.setCardOpen(dashboard_id,column_id,card_id);
    };
    closeCardOpen = ()=> {
      this.props.dashboardActions.closeCardOpen();
    };
    selectCard = (columnInd)=> (cardInd) => () => {
      this.props.dashboardActions.selectCard(columnInd,cardInd);
    };



    render() {


      return (
        <WrappedComponent
          {...this.props}/>
      )
    }
  }
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  ContainerDashboard
)(Dashboard)