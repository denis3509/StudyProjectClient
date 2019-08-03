import React, {useState, useRef, useEffect} from 'react'
import styled from 'styled-components'

const CardFullContent = (props) => {
  const {content} = props;
  const {updateCard} = props;

  const handleOnBlur = (event) => {
    updateCard({content: event.target.value})
  };
  return (
    <S.WrapperContent>
      <S.Title>Описание</S.Title>
      {content ?
        <S.Content
          onBlur={handleOnBlur}
          value={content}
        />
        : <S.Empty/>}
    </S.WrapperContent>
  )

};

const S = {};
S.WrapperContent = styled.div`
display : none;  
flex-direction : column;
align-items : flex-start;
`;
S.Title = styled.div`
  font-size: 16px;
  line-height: 20px;
  font-weight: 600;
  color: ${p => p.theme.color.darkBlue};
  margin-bottom : 10px;
`;
S.Empty = styled.div`
border-radius : 3px;
padding : 10px;
background : ${p => p.theme.color.column};
 :hover {
  background : ${p => p.theme.color.columnHover};
 }  
`;
S.Content = styled.textarea`
overflow: hidden;
    overflow-wrap: break-word;
    height: 33px;
    background: transparent;
    border-radius: 3px;
    box-shadow: none;
    font-size: 20px;
    font-weight: 600;
     width: 100%;
    line-height: 24px;
    margin: -4px -8px;
    min-height: 75px;
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


export default CardFullContent