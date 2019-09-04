import React, {useState} from 'react'
import styled from 'styled-components'

const NewCard = (props) => {

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");

  const {
    cardActions,
    dashboard_id,
    column_id,
  } = props;

  const handleOnKeyPress = (event) => {
    if (event.key === "Enter") {
      handleOnClick();
    }
  };
  const handleOnClick = () => {
    cardActions.newCard(dashboard_id,column_id,{cardName: value});
    setOpen(false);
    setValue("");
  };

  if (open) {
    return (
      <S.AddCard>
        <S.TextArea
          onKeyDown={handleOnKeyPress}
          placeholder={"Введите имя карточки"}
          onChange={(e) => setValue(e.target.value)}
        />
        <S.AddButton
          onClick={handleOnClick}
        >
          Добавить
        </S.AddButton>
      </S.AddCard>
    )
  }
  return (
    <S.AddCardButton
      onClick={() => setOpen(true)}
    >
      <S.Icon className={'fas fa-plus'}/> Добавить карточку
    </S.AddCardButton>

  )


};

const S = {};
S.AddCard = styled.div`
display : flex ;
flex-direction : column;
`
S.TextArea = styled.textarea`
  background-color: ${p => p.theme.color.columnCard};
   
  color : ${p => p.theme.color.darkBlue};
  border-radius : 3px;
  line-height: 20px;  
  margin : 0 0px 4px 0px;
  border : none;
  resize: none; 
  max-height: 54px;
  box-shadow: 0 1px 0 rgba(9,30,66,.25);     
  padding : 4px;
  outline: none;
`;
S.AddButton = styled.button`
    background: #61BD4F;
    border-radius: 3px;
    box-shadow: 0 2px 0 #3F6F21;
    min-height: 32px;   
    padding: .6em 1.3em;
    position: relative;
    text-decoration: none;
    border: 0px;
    color: #fff;
    font-weight : bold;
    margin : 0px 0px 8px 0px;
    width : 150px;
`;
S.AddCardButton = styled.button`
  width: 106%;
  border-radius: 0 0 3px 3px;
  color: #6b778c;
  padding : 8px;
  text-align : left;
  background-color: ${p => p.theme.color.column};
  margin : 0 -8px 0 -8px;
  :hover {
    background-color: ${p => p.theme.color.columnHover};
  }
`;
S.Icon = styled.i`
 margin-right :3px;
 margin-left :3px;
`;
export default NewCard