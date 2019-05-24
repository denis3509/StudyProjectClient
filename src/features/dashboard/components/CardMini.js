import React, {useState, Fragment} from 'react'
import styled from 'styled-components'


const CardMini = (props) => {
  const {cardName, setCardName} = props;
  const [editable, setEditable] = useState(false);
  const [value, setValue] = useState(cardName);
  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSave();
    }
  };
  const handleSave = () => {
    setCardName(value);
    setEditable(false);
  };
  if (!editable) {
    return (
      <S.CardMini>
        <S.EditButton
          onClick={() => setEditable(true)}
        >
          <i className={"fas fa-edit"}/>
        </S.EditButton>
        <S.Title>{cardName}</S.Title>
      </S.CardMini>
    )
  } else {
    return (
      <Fragment>
        <S.TextArea
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onKeyPress={handleKeyPress}
        >

        </S.TextArea>
        <S.SaveButton
          onClick={handleSave}
        >
          Сохранить
        </S.SaveButton>
      </Fragment>
    )
  }
};

const S = {};

S.CardMini = styled.a`
  content:"";
	display:block;
	clear:both;
  background-color: ${p => p.theme.color.columnCard};
  text-align: left;
  color : ${p => p.theme.color.darkBlue};
  border-radius : 3px;
  line-height: 20px;  
  margin : 4px 0px 4px 0px;
  border : none;
  min-height : 54px;
  max-height: 154px;
  box-shadow: 0 1px 0 rgba(9,30,66,.25);     
  padding :  4px 4px 6px 8px;
       position : relative;
  :hover {
   button {
     display : block;
     background-color : ${p => p.theme.color.columnCard};
   }
  }
`;
S.TextArea = styled.textarea`
   
  background-color: white;
  text-align: left;
  color : ${p => p.theme.color.darkBlue};
  border-radius : 3px;
  line-height: 20px;  
  margin : 4px 0px 4px 0px;
  border : none;
  min-height : 54px;
  max-height: 154px;
  box-shadow: 0 1px 0 rgba(9,30,66,.25);     
  padding :  4px 4px 6px 8px;
  position : relative;
  resize : none;
   
`
S.Title = styled.div`
  margin :0px;
  word-wrap: break-word;
`;
S.EditButton = styled.button`
  position : absolute;
  right : 0px;
  top : 4px;
  display : none;
  opacity : 0.7;
  :hover { 
    opacity :1;
  }
 
`;
S.SaveButton = styled.button` 
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
    margin : 0px  0px 8px  0px;
    width : 150px;
`
export default CardMini