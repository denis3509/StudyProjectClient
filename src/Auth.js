import React, {Fragment, useState} from 'react'
import {BrowserRouter as Router, Route, Link, Redirect} from "react-router-dom";
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import Login from "./features/user/containers/Login";
import store from "./store";
import Dashboard from "./features/dashboard/containers";
import MainPage from "./features/mainPage/containers";
import Header from './features/header/containers'
import * as userActions from './features/user/logic/actions'
import dashboardApi from './features/dashboard/logic/api'
import Modal from "./UI/modals/Modal";
import AddDashboard from "./AddDashboard";
import ModalMessage from "./UI/modals/ModalMessage";


const mapStateToProps = (state) => ({
  userName: state.user.userName,
  isLoading: state.user.isLoading,
});
const mapDispatchToProps = (dispatch) => ({
  userActions: bindActionCreators(userActions, dispatch),

});

class Auth extends React.Component {

  state = {
    openModal: false,

  };

  componentDidMount() {
    this.props.userActions.getUser();
   // this.props.userActions.openModal("tesT");
  }


  setOpenModal = (openModal) => {
    this.setState({openModal});
  };

  newDashboard = (dashboard)=>{
    dashboardApi.newDashboard(dashboard)
      .then((res)=>{
        const {_id} = res.data;
        document.location.href= "/dashboard/" + _id;
      })
      .catch((error)=>{
        this.props.userActions.openModal(error.response ? error.response.data.message : "ошибка")
      })
  };


  render() {
    const {userName, isLoading} = this.props;


    return (<Fragment>
      {
        userName && <Router>
          <div>
            <Header
              setOpenModal={this.setOpenModal}
            />
            <Route exact path="/" render={() => <Redirect to="/home"/>}/>
            <Route path="/home" component={MainPage}/>
            <Route  path="/dashboard/:dashboard_id"  component={Dashboard} />
           <Route  path="/dashboard/:dashboard_id/card/:column_id/:card_id" component={Dashboard}/>
          </div>
        </Router>
      }
      {!userName && !isLoading && <Login/>}
      <Modal
        open={this.state.openModal}
        setOpen={this.setOpenModal}
      >
        <AddDashboard
          newDashboard={this.newDashboard}
        />

      </Modal>
      <ModalMessage

      />

    </Fragment>)
  }
};

const PrivateRoute = ({component: Component, userName, ...rest}) => {
  return (
    <Route
      {...rest}
      render={props =>
        userName ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: {from: props.location}
            }}
          />
        )
      }
    />
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Auth);
