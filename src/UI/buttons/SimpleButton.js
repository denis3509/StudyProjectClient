import React from 'react'
import styled from 'styled-components'


const SimpleButton = (props) => {
  return (
      <S.Button
          {...props}
      />
  )
};

export default SimpleButton
const S={};
S.Button = styled.button`
  width : 100%;
  padding : 10px 5px;
  border-radius : 3px;
  background-color : ${p=>p.theme.color.column};
  :focus {
    background-color : ${p=>p.theme.color.columnHover}
  }
`;