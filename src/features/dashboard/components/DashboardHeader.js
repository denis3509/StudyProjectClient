import React from 'react'
import styled from 'styled-components'
import EditableName from "../../../UI/inputs/EditableName";

const DashboardHeader  = (props) => {
  const {dashboardName}= props;

  return (
    <S.HeaderWrapper>
      <EditableName
        name={dashboardName}
        setName={(name)=>console.log(name)}
      />
    </S.HeaderWrapper>
  )
};

const S ={};
S.HeaderWrapper = styled.div`
width: 100%;
 
background-color: ${p=>p.theme.color.card};
display :  flex;
padding : 4px;
`;
export default DashboardHeader