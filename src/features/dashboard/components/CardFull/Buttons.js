import React from 'react'
import styled from 'styled-components'

const Buttons = (props)=>{
  const {
    cardActions,
    cardOpen,
    dashboardActions,
  } = props;
  const {dashboard_id,column_id,card_id} = cardOpen;
  const handleDelete = ()=> {
    cardActions.removeCard(dashboard_id,column_id,card_id);
    dashboardActions.closeCardOpen();
  };
  return (
    <S.Buttons>
      <S.Button
        onClick={handleDelete}
      >
        Удалить карточку
      </S.Button>
    </S.Buttons>
  )
};

const S ={};
S.Buttons = styled.div`
 display : flex;
 flex-direction : column;
`;

S.Button = styled.button`
  width : 100%;
  padding : 10px 5px;
  border-radius : 3px;
  background-color : ${p=>p.theme.color.column};
  :focus {
    background-color : ${p=>p.theme.color.columnHover}
  }
`;

export default Buttons;

