import React, {useState, useRef, useEffect} from 'react'
import styled from 'styled-components'
import CardFullTitle from "../../../../UI/titles/CardFullTitle";

const Description = (props) => {
  const {
    content,
    cardOpen,
    cardActions,
    dashboardActions,
  } = props;

  const [value, setValue] = useState(content);
  const handleOnBlur = () => {
    cardActions.updateCard(cardOpen.dashboard_id, cardOpen.column_id, cardOpen.card_id, {content: value})
      .then(res => {
        dashboardActions.refreshDashboard(cardOpen.dashboard_id);
      })
  };

  const handleOnChange = (e) => {
    setValue(e.target.value)
  };

  return (
    <S.Description>
      <CardFullTitle>Описание</CardFullTitle>

      <S.Content
        placeholder="Введите описание"
        onBlur={handleOnBlur}
        value={value}
        onChange={handleOnChange}
      />

    </S.Description>
  )

};

const S = {};
S.Description = styled.div`
display : flex;
flex-direction : column;
align-items : flex-start;
justify-content : flex-start;
`;


S.Content = styled.textarea`
overflow: hidden;
    overflow-wrap: break-word;
     
    background: transparent;
    border-radius: 3px;
    box-shadow: none;
    font-size: 16px;
     
     width: 90%;
    line-height: 24px;
    margin: -4px -8px;
    min-height: 50px;
    padding: 4px 8px;
    resize: none;
    border: none;
    color: ${p => p.theme.color.darkBlue};
    transition-property: background-color,border-color,box-shadow;
    transition-duration: 85ms;
    transition-timing-function: ease;
    outline : 0;
    box-sizing: border-box;
    :focus {
      background : white;   
      box-shadow : 0 0 0 2px ${p => p.theme.color.card};
      border : none;
    }
`;


export default Description