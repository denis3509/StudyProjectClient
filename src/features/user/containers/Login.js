import React from 'react'
import {connect} from 'react-redux'
import {compose, bindActionCreators} from 'redux'
import * as userActions from '../logic/actions'
import Login from '../components/Login'

const mapStateToProps = (state)=> ({
  error: state.user.error,
});

const mapDispatchToProps =(dispatch)=>({
  userActions : bindActionCreators(userActions, dispatch),
});

const LoginContainer = WrappedComponent =>{
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
  connect(mapStateToProps,mapDispatchToProps),
  LoginContainer)(Login)