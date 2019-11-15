import React, {useState} from 'react'
import styled from 'styled-components'
import EditableName from "../../../../UI/inputs/EditableName";
import Modal from '../../../../UI/modals/Modal'
import ModalConfirm from '../../../../UI/modals/ModalConfirm'
import Invite from './Invite'
import {connect} from 'react-redux';
import api from '../../logic/api'

const DashboardHeader = (props) => {
  const {dashboardName, dashboard_id, dashboardActions} = props;

  const [openInvite, setOpenInvite] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);

  return (
    <S.DashboardHeader>
      <EditableName
        dashboard_id={dashboard_id}
        name={dashboardName}
        dashboardActions={dashboardActions}
      />
      <S.Divider/>
      <S.Button
        onClick={() => setOpenInvite(true)}
      >Пригласить</S.Button>

      <Modal
        open={openInvite}
        setOpen={setOpenInvite}
        opacity={0.4}
      >
        <Invite
          dashboard_id={dashboard_id}
          setOpen={setOpenInvite}
        />
      </Modal>
      <ModalConfirm
        open={openDelete}
        setOpen={setOpenDelete}
        modalMessage={'Вы уверены, что хотите удалить доску?'}
        modalRedirect={'/home/dashboardList'}
        confirmAction={()=>api.removeDashboard(dashboard_id)}
      />
      <S.ButtonRight
        onClick={()=>setOpenDelete(true)}
      >Удалить доску</S.ButtonRight>
    </S.DashboardHeader>
  )
};

const S = {};
S.DashboardHeader = styled.div`
width: 100%;
 
background-color: ${p => p.theme.color.card};
display :  flex;  
 
flex-direction : row;
flex-wrap : wrap;
padding : 4px;
`;
S.Button = styled.button`
 font-weight: bold;
 height: 32px;
 border-radius: 3px;
 color: #fff;
 margin : 0px 5px;
 justify-self: flex-start;
 background: hsla(0,0%,100%,.3);
 :hover {
 background: hsla(0,0%,100%,.2);
 }
 
`;
S.ButtonRight = styled.button`
 font-weight: bold;
 height: 32px;
 border-radius: 3px;
 color: #fff;
 margin : 0px 5px;
 margin-left : auto;
 background: hsla(0,0%,100%,.3);
 :hover {
 background: hsla(0,0%,100%,.2);
 }
 
`;
S.Divider = styled.div`
width : 1px;
height : 20px;
line-height :  32px;
border-left : 1px solid rgba(255,255,255,0.8);
align-self : center;   
`;

const mapStateToProps = (state) => ({
  dashboardName: state.dashboard.dashboardName,
  dashboard_id: state.dashboard._id,
});

export default connect(mapStateToProps)(DashboardHeader);