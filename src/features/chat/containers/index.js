import React from 'react'
import {connect} from 'react-redux'
import {compose, bindActionCreators} from 'redux'
import Chat from '../components'
import  * as chatActions from '../logic/actions'

const mapStateToProps = (state) => ({
  userName: state.user.userName,
  user_id: state.user.user_id,
  dashboard_id: state.dashboard._id,
  messages : state.chat.messages,
});
const mapDispatchToProps = dispatch => ({
  chatActions: bindActionCreators(chatActions,dispatch)
});


const ChatContainer = WrappedComponent => {
  return class extends React.Component {
    componentDidMount() {
      const {dashboard_id} = this.props;
      this.props.chatActions.getMessages(dashboard_id)
    }

    render() {
      return <WrappedComponent
        {...this.props}
      />
    }
  }
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  ChatContainer
)(Chat)