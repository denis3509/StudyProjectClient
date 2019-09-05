import React, {useState} from 'react'
import styled from 'styled-components'

const AddDashboard = (props) => {
  const [value,setValue] = useState("Новая доска");
  const {newDashboard} = props;
  return (
    <S.Wrapper>
      <S.Input
        value={value}
        onChange={(e)=>setValue(e.target.value)}
        placeholder={'Введите название доски'}
      />
      <S.Button
        onClick={()=>newDashboard({dashboardName : value})}
      >
        Добавить доску
      </S.Button>
    </S.Wrapper>
  )
};

const S = {};
S.Wrapper = styled.div`
  border-radius: 5px;
  background-color: ${p => p.theme.color.card};
  width : 300px;
  height : 150px;

`;
S.Input =styled.input`
  padding: 2px 8px;
  border: none;
  color: #fff;
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
  outline : 0;
  background: rgba(255,255,255,0.5);
  margin:  20px auto;
  border-radius : 3px; 
`
S.Button = styled.button`
    background-color: #5aac44;
    box-shadow: 0 1px 0 0 #3f6f21;
    border: none;
    color: #fff;
     
    height : 32px;
    margin : 25px 50px;
    border-radius : 3px;
`
export default AddDashboard
