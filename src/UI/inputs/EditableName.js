import React, {useState} from 'react'
import styled from 'styled-components'

const EditableName = (props) => {
  const { name, dashboardActions,dashboard_id} = props;
  const [edit,setEdit] = useState(false);
  const [value,setValue]= useState(name);

  const handleKeyPress = (event) => {
    if (event.key==='Enter') {
      dashboardActions.updateDashboard(dashboard_id,{dashboardName:value});
      setEdit(false);
    }
  };
  const handleOnBlur = async ()   =>{
    setEdit(false);
    await dashboardActions.updateDashboard(dashboard_id,{dashboardName:value});
    dashboardActions.refreshDashboard(dashboard_id);
  };


  if (edit) {
    return (
      <S.Input
        {...props}
        value={value}
        onChange={(event)=>setValue(event.target.value)}
        onKeyPress={handleKeyPress}
        onBlur={handleOnBlur}
        autofocus
      />
    )
  }
  return <S.Name onClick={()=>setEdit(true)} {...props}>{name}</S.Name>
};

const S = {};
S.Input = styled.input`
    background-color: #fff;
    font-weight: 700;
    font-size: 18px;
    height: 30px;
    margin-top: 1px;
    margin-right: 1px;
    margin-left: -2px;
    padding: 0 10px 0 9px;
`;
S.Name = styled.button`
   border-radius: 3px;
   color: #fff;
   margin: 0 4px 0 0;
   background-color: ${p=>p.theme.color.card};
   :hover{
      background-color: ${p=>p.theme.color.header};
   }
   font-size: 18px;
   font-weight: 700;
   line-height: 32px;
`;
export default EditableName
