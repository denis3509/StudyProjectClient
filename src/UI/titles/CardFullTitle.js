import React from 'react'
import styled from 'styled-components'

const CardFullTitle = (props) => {
  return (
      <S.Title {...props}>
        {props.children}
      </S.Title>
  )
};

const S = {};
export default CardFullTitle;

S.Title = styled.div`
  font-size: 16px;
  line-height: 20px;
  font-weight: 600;
  color: ${p => p.theme.color.darkBlue};
  margin-bottom : 10px;
   
`;
