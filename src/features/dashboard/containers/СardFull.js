import React from 'react'
import {connect} from 'react-redux'
import {compose, bindActionCreators} from 'redux'
import * as cardActions from '../logic/cardFull/cardFullActions'
import * as dashboardActions from '../logic/actions'
import CardFull from '../components/CardFull/CardFull'

const mapStateToProps = (state) => ({
  cardName: state.dashboard.card.cardName,
  content: state.dashboard.card.content,
  isLoading : state.dashboard.card.isLoading,
  error : state.dashboard.card.error,
});
const mapDispatchToProps = dispatch => ({
  cardActions: bindActionCreators(cardActions, dispatch),
  dashboardActions: bindActionCreators(dashboardActions,dispatch),
});

const ContainerCardFull = WrappedComponent => {
  return class extends React.Component {
    componentDidMount() {
      this.getCard();
    }

    getCard = () => {
      const {dashboard_id, column_id, card_id} = this.props.cardOpen;
      this.props.cardActions.getCard(dashboard_id, column_id, card_id);
    };

    removeCard = () => {
      const {dashboard_id, column_id, card_id} = this.props.cardOpen;
      this.props.cardActions.removeCard(dashboard_id, column_id, card_id);
    };

    updateCard = (update) => {
      const {dashboard_id, column_id , card_id} = this.props.cardOpen;
      this.props.cardActions.updateCard(dashboard_id, column_id  , card_id, update)
        .then((result)=>{
           this.props.refreshDashboard();
        })
        .catch((error)=>{
          console.log('error', error);
        })
      ;
    };

    render() {


      return (
        <WrappedComponent
          updateCard={this.updateCard}
          removeCard={this.removeCard}
          {...this.props}
        />
      )

    }

  }
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  ContainerCardFull
)(CardFull)