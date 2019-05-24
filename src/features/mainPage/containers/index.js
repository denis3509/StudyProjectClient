import React, {Fragment} from 'react'
import MainPage from '../components'
import {connect} from 'react-redux'
import {compose, bindActionCreators} from 'redux';
import * as userActions from '../../user/logic/actions'

const mapStateToProps = (state) => ({
  userName: state.user.userName,
  dashboardList: state.user.dashboardList,
});
const mapDispatchToProps = (dispatch) => ({
  mainPageActions: bindActionCreators(userActions, dispatch),
})
;

const MainPageContainer = (WrappedComponent) => {
  return class extends React.Component {


    render() {
      return (
        <WrappedComponent
          {...this.props}
        />
      )
    }
  }
};
export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  MainPageContainer
)(MainPage)