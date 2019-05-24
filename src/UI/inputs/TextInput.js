import React from 'react'
import styled from 'styled-components'

const TextInput =(props)=>{
  const {
    onChange,
    value,
    placeholder
  } = props;
  return (
    <S.Input
      onChange={onChange}
      value={value}
      placeholder={placeholder}
      {...props}
    />
  )
};

const S ={};
S.Input = styled.input`
    background: #EDEFF0;
    border-radius: 4px;
    border: 1px solid #CDD2D4;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    padding: .5em;
    max-width: 400px;
    width: 100%;
    min-height: 50px;
`

export default TextInput