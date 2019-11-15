import React, {useState} from 'react'
import styled from "styled-components";
import {connect} from 'react-redux';

const NewColumn = (props) => {
  const {
    dashboardActions,
    dashboard_id
  } = props;

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");

  const handleOnKeyPress = (event) => {
    if (event.key === "Enter") {
      handleOnClick();
    }
  };
  const handleOnClick = () => {
    dashboardActions.newColumn(dashboard_id,{columnName:value});
    setOpen(false);
    setValue("");
  };

  if (open) {
    return (
      <S.AddColumn>
        <S.TextArea
          onKeyDown={handleOnKeyPress}
          placeholder={"Введите имя колонки"}
          onChange={(e) => setValue(e.target.value)}
        />
        <S.AddButton
          onClick={handleOnClick}
        >
          Добавить
        </S.AddButton>
      </S.AddColumn>
    )
  }


  return (
    <S.NewColumn
      onClick={() => setOpen(true)}
    >
      <i className="fas fa-plus"/>
      <S.NewColumnText>Новая колонка</S.NewColumnText>
    </S.NewColumn>
  )
};

const S = {};
S.NewColumn = styled.button`
    background-color: rgba(0,0,0,.12);
    cursor: pointer;
    color: #fff;
    padding: 8px 8px;
    color: hsla(0,0%,100%,.8);
    transition: color 85ms ease-in;
    font-size: 14px;
    line-height: 20px;
    font-weight: 400;
    :hover{
    background-color: rgba(0,0,0,.30);
    }
    min-width: 272px;
    min-height : 32px;
     border-radius : 3px;
     text-align : left;
`;
S.NewColumnText = styled.span`
margin-left : 3px;
`;

S.AddColumn = styled.div`
display : flex ;
flex-direction : column;
`;

S.TextArea = styled.textarea`
  background-color: ${p => p.theme.color.columnCard};
   
  color : ${p => p.theme.color.darkBlue};
  border-radius : 3px;
  line-height: 20px;  
  margin : 0 0px 4px 0px;
  border : none;
  resize: none; 
  max-height: 32px;
  box-shadow: 0 1px 0 rgba(9,30,66,.25);     
  padding : 4px;
  outline: none;
  width : 272px;
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

const mapStateToProps = (state) => ({
  dashboard_id: state.dashboard._id,
})

export default connect(mapStateToProps)(NewColumn)
