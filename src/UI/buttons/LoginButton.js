import React from 'react'
import styled from 'styled-components'

const LoginButton = (props)=>{
  const {text} = props;
  return (
    <S.Button
      {...props}
    >
      {text}
    </S.Button>
  )
};

const S = {};
S.Button = styled.button`
    background: #61BD4F;
    border-radius: 3px;
    box-shadow: 0 2px 0 #3F6F21;
    min-height: 50px;
    padding: .6em 1.3em;
    position: relative;
    text-decoration: none;
    border: 0px;
    color: #fff;
    font-weight : bold;
`;
export default LoginButton