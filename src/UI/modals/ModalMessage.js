import React from 'react'
import Modal from './Modal'
import styled from 'styled-components'
import {connect} from 'react-redux'
import * as userActions from '../../features/user/logic/actions'

const mapStateToProps = (state) => ({
  open: state.user.openModal,
  modalMessage: state.user.modalMessage,
  modalCallback: state.user.modalCallback,
  modalRedirect: state.user.modalRedirect,
});
const mapDispatchToProps = (dispatch) => ({
  openModal: (modalMessage) => dispatch(userActions.openModal(modalMessage)),
  closeModal: () => dispatch(userActions.closeModal())
});

const ModalMessage = (props) => {
  const {
    open,
    modalMessage,
    closeModal,
    modalRedirect
  } = props;
  const setOpen = (open) => {
    if (!open) {
      closeModal();
    }
  };
  const handleClose = ()=>{
    closeModal();
    console.log('modal close, modal redirect: ', modalRedirect)
    if (modalRedirect) {
      console.log('modal redirect', modalRedirect);
      document.location.href = modalRedirect;
    }
  };


  return (
    <Modal
      open={open}
      setOpen={setOpen}
      opacity={0}>
      <S.Background>
        <S.Message>
          {modalMessage}
        </S.Message>
        <S.Button
          onClick={handleClose}
        >
          ОК
        </S.Button>
      </S.Background>
    </Modal>
  )
};

const S = {};
S.Background = styled.div`
background-color: white;
border-radius: 3px;
box-shadow: 0 8px 16px -4px rgba(9,30,66,.25), 0 0 0 1px rgba(9,30,66,.08);
padding : 10px;
display : flex;
flex-direction : column;
min-width : 200px;
`;
S.Message = styled.span`
  line-height :  24px;
`;
S.Button = styled.button`
 
margin: 20px auto 0 auto;
border-radius: 3px;
height : 32px;
width : 180px;
background-color: ${p=>p.theme.color.card};
color : white;
:hover{
 background-color: ${p=>p.theme.color.cardHover};
}
`;

export default connect(mapStateToProps,mapDispatchToProps)(ModalMessage)
