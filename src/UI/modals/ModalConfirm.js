import React from 'react'
import Modal from './Modal'
import styled from 'styled-components'
import {connect} from 'react-redux'
import * as userActions from '../../features/user/logic/actions'


const ModalMessage = (props) => {
  const {
    open,
    setOpen,
    modalMessage,
    modalRedirect,
    confirmAction,
    declineAction
  } = props;

  const handleConfirm = () => {
    confirmAction();
    setOpen(false);
    document.location.href = modalRedirect;
  };
  const handleDecline = () => {
    declineAction && declineAction();
    setOpen(false);
  };

  return (
    <Modal
      open={open}
      setOpen={setOpen}
      opacity={0.4}>
      <S.Wrapper>
        <S.Message>{modalMessage}</S.Message>
        <S.Buttons>
          <S.ButtonConfirm
            onClick={handleConfirm}
          >
            Да
          </S.ButtonConfirm>
          <S.ButtonDecline
            onClick={handleDecline}
          >
            Нет
          </S.ButtonDecline>
        </S.Buttons>
      </S.Wrapper>
    </Modal>
  )
};

const S = {};

S.Wrapper = styled.div`
width : 300px;
height : 120px;
background : ${p => p.theme.color.card};
border-radius : 5px;
display: flex;
flex-direction : column;
`;
S.Buttons = styled.div`
 display : flex;
 justify-content : space-around;
`;
S.Message = styled.div`
  padding: 2px 8px;
  border: none;
  color: #fff;
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
  outline : 0;
  
  margin:  10px auto;
  border-radius : 3px; 
`;

S.ButtonConfirm = styled.button`
    background-color: #5aac44;
    box-shadow: 0 1px 0 0 #3f6f21;
    border: none;
    color: #fff;
     width : 100px;
    height : 32px;
    margin : 0px 50px;
    border-radius : 3px;
`;
S.ButtonDecline = styled.button`
 background-color: #ac1a14;
    box-shadow: 0 1px 0 0 #6f181f;
    border: none;
    color: #fff;
      width : 100px;
    height : 32px;
    margin : 0px 50px;
    border-radius : 3px;
`;
S.Error = styled.div`
color: red;
`;

export default ModalMessage
