import React from 'react'
import {connect} from 'react-redux'
import {compose, bindActionCreators} from 'redux'
import * as usersActions from '../../../features/user/logic/actions'
import Header from '../components'

const mapStateToProps = (state)=>({
  userName : state.user.userName,
});

const mapDispatchToProps = (dispatch)=> ({
  usersActions : bindActionCreators(usersActions, dispatch),
});

const HeaderContainer = (WrappedComponent) => {
  return class extends React.Component {



    render() {
      return (
        <WrappedComponent
          {...this.props}
        />)
    }
  }
}
export default compose(
  connect( mapStateToProps,mapDispatchToProps),
  HeaderContainer
)(Header)