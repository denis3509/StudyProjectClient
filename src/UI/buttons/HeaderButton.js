import React from 'react'
import styled from 'styled-components'

const HeaderButton = (props)=>{

  return (
    <S.HeaderButton
      {...props}
    >
      {props.children}
    </S.HeaderButton>
  )
};

const S ={};

S.HeaderButton = styled.button`
 font-weight: bold;
 height: 32px;
 border-radius: 3px;
 color: #fff;
 margin-right :4px;
 background: hsla(0,0%,100%,.3);
 :hover {
 background: hsla(0,0%,100%,.2);
 }
`;

export default HeaderButton