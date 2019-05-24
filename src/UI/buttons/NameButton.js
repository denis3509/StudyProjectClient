import React from 'react'
import styled from 'styled-components'

const NameButton = (props) =>{
  const {name} = props;
  const nameArr = name.split(" ");
  console.log(nameArr[0]);
  let icon = "";
  nameArr.forEach((word)=>{
    icon = icon + word[0];
  });
  icon.toUpperCase();

  return (
    <S.Button {...props}>
      {icon}
    </S.Button>

  )
};

const S = {};
S.Button = styled.button`
  border-radius : 45px;
  width :32px;
  height: 32px;
  background : #dfe1e6; 
  line-height : 32px;
 
`;

export default NameButton;