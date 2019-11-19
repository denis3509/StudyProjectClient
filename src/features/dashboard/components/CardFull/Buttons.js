import React from 'react'
import styled from 'styled-components'
import SimpleButton from "../../../../UI/buttons/SimpleButton";

const Buttons = (props) => {
  const {
    cardActions,
    cardOpen,
    dashboardActions,

  } = props;
  const {dashboard_id, column_id, card_id} = cardOpen;
  const handleDelete = () => {
    cardActions.removeCard(dashboard_id, column_id, card_id);
    dashboardActions.closeCardOpen();
  };
  const buttons = [
    {
      children: 'Удалить карточку',
      onClick: handleDelete,
    }, {
      children: 'Метки',
      disabled : true,
    }, {
      children: 'Чек-лист',
      disabled : true,
    }, {
      children: 'Срок',
      disabled : true,
    }, {
      children: 'Вложение',
      disabled : true,
    }, {
      children: 'Обложка',
      disabled : true,
    },



  ];

  return (
      <S.Buttons>
        {
          buttons.map((item, index) => {
            return (
                <S.Button
                    key={'cardfull-button-' + index}
                    {...item}
                />
            )
          })
        }
      </S.Buttons>
  )
};

const S = {};
S.Buttons = styled.div`
 display : flex;
 flex-direction : column;
 @media(max-width : 550px) {
 display : grid;
 grid-template-columns : 1fr 1fr;
  grid-column-gap : 5px;
 }
`;

S.Button = styled(SimpleButton)`
 margin-bottom : 5px;
`;

export default Buttons;

