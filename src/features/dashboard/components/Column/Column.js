import React, {useState, useRef} from 'react'
import styled from 'styled-components'
import EditableNameColumn from './EditableNameColumn'
import NewCard from "./NewCard";
import TargetColumn from './TargetColumn'
import CardMini from "../Card/CardMini";
import ContextMenu from "../../../../UI/menus/ContextMenu/ContextMenu";


const Column = (props) => {
  const {
    cards,
    _id: column_id,
    columnName,
    cardHeightDnD
  } = props.column;
  const {
    dashboard_id,
    dashboardActions,
    cardActions,
    columnInd,
  } = props;
  const ref = useRef();
  const [menuOpen, setMenuOpen] = useState(false);
  const groups = [
    [
      {
        title: "Удалить",
        component: "button",
        onClick: () => {
          dashboardActions.removeColumn(dashboard_id, column_id)
        }
      },

    ],
  ];
  const handleOnDragStart = () => {
    dashboardActions.setColumnDragSource(
      ref.current.clientHeight,
      dashboard_id,
      column_id,
      columnInd,
    )
  };

  return (<S.Wrapper>
      <S.Column
        ref={ref}
        draggable={true}
        onDragStart={handleOnDragStart}
      >
        <S.ColumnHeader>
          <EditableNameColumn
            name={columnName}
            dashboardActions={dashboardActions}
            dashboard_id={dashboard_id}
            column_id={column_id}
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
                  key={card._id}
                  {...card}
                  column_id={column_id}
                  cardInd={index}
                  columnInd={columnInd}
                  cardActions={cardActions}
                  dashboardActions={dashboardActions}
                />
              )
            })
          }
        </S.Cards>

        <NewCard
          dashboard_id={dashboard_id}
          column_id={column_id}
          cardActions={cardActions}
        />

      </S.Column>
      <TargetColumn
        columnInd={columnInd}
        column_id={column_id}
        dashboardActions={dashboardActions}
      />
    </S.Wrapper>
  )
};


const S = {};
S.Wrapper = styled.div`
display: flex;
flex-direction: row;
`
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