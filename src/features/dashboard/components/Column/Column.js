import React, {useState} from 'react'
import styled from 'styled-components'
import EditableNameColumn from './EditableNameColumn'
import NewCard from "./NewCard";

import CardMini from "../Card/CardMini";
import ContextMenu from "../../../../UI/menus/ContextMenu/ContextMenu";


const Column = (props) => {
  const {
    cards,
    _id,
    columnName,
    cardHeightDnD
  } = props.column;
  const {
    dashboardActions,
    cardActions
  } = props;
  const [menuOpen, setMenuOpen] = useState(false);
  const groups = [
    [
      {
        title: "Удалить",
        component: "button",
        onClick: () => {
          dashboardActions.removeColumn(_id)
        }
      },

    ],
  ];
  const [state,updateState]= useState({
    width: 0,
    height : 0,
    source : 0,
    target : 0,
  });

  const setState = (newState)=> {
    updateState(Object.assign({},state,newState));
  };

  return (
    <S.Column>
      <S.ColumnHeader>
        <EditableNameColumn
          name={columnName}
          setName={(name) => console.log('set column name:', name)}
        />
        <S.MenuButton
          onClick={() => setMenuOpen(true)}
        >
          <i className="fas fa-ellipsis-h"/>
          <ContextMenu
            title={'Дейсвтия с колонкой'}
            open={menuOpen}
            setOpen={setMenuOpen}
            groups={groups}
          />
        </S.MenuButton>
      </S.ColumnHeader>
      <S.Cards>
        {
          cards.map((card, index) => {
            return (
              <CardMini
                card={card}
                cardActions={cardActions}
                dashboardActions={dashboardActions}
                cardIndex={index}
              />
            )
          })
        }
      </S.Cards>
      <NewCard
        newCard={()=>cardActions.newCard(_id)}
      />

    </S.Column>
  )
};


const S = {};

S.Column = styled.div`
  display : flex;
  flex-direction: column;
   background-color: ${p => p.theme.color.column};
   border-radius: 3px;
    box-sizing: border-box;
   width: 272px;
   padding : 0 8px 0 8px;
   margin-right : 10px;
`;
S.ColumnHeader = styled.div`
  display : flex;
  flex-direction : row;
  justify-content: space-between;
   
`;
S.MenuButton = styled.button`
  color: #6b778c;
  margin : 4px 6px 0 0;
  padding: 6px;
  border-radius : 3px;
  background-color: ${p => p.theme.color.column};
  :hover {
    background-color: ${p => p.theme.color.columnHover};
  }
`;
S.Cards = styled.div`
  display : flex;
  flex-direction : column;
`;


export default Column