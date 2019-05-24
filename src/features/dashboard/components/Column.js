import React, {useState} from 'react'
import styled from 'styled-components'
import EditableNameColumn from './EditableNameColumn'
import AddCard from "./AddCard";
import Card from './Card'
import CardMini from "./CardMini";


const Column = (props) => {
  const {cards, _id, columnName} = props.column;
  const [openAddCard, setOpenAddCard] = useState(false);
  return (
    <S.Column>
      <S.ColumnHeader>
        <EditableNameColumn
          name={columnName}
          setName={(name) => console.log('set column name:', name)}
        />
        <S.MenuButton>
          <i className="fas fa-ellipsis-h"/>
        </S.MenuButton>
      </S.ColumnHeader>
      <S.Cards>
        {
          cards.map((card) => {

            return (
              <CardMini
                setCardName={(name) => console.log('set name: ', name)}
                {...card}
              />
            )
          })
        }
      </S.Cards>
      <AddCard
        addCard={(name) => console.log(name)}
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