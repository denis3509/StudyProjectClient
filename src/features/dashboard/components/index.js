import React, {useState} from 'react'
import styled from 'styled-components'
import LoadingOrError from "../../../UI/system/LoadingOrError";
import DashboardHeader from './dashboardHeader/DashboardHeader'
import Column from './Column'
import NewColumn from './Column/NewColumn'
import CardFull from '../containers/СardFull'
import {BrowserRouter as Router, Route, Link, Redirect} from "react-router-dom";
import TargetColumn from './Column/TargetColumn'
import Chat from "../../chat/containers";
import Modal from '../../../UI/modals/Modal'
import withScroll from '../../../UI/HOCs/withScroll'
import {compose} from 'redux'

const Dashboard = (props) => {
    const {
      dashboardName,
      error,
      isLoading,
      columns,
      cardOpen,
      cardActions,
      dashboardActions,
      dashboard_id
    } = props;


    if (isLoading || error) return (
      <LoadingOrError
        isLoading={isLoading}
        error={error}
        modalRedirect={"/home/dashboardList"}
      />
    );


    return (
      <S.Dashboard>
        <DashboardHeader
          dashboardActions={dashboardActions}

        />
        <S.ColumnsContainer>
          {
            columns.map((column, index) => {
              return (
                <Column
                  key={column._id}
                  columnInd={index}
                  column={column}
                  dashboard_id={dashboard_id}
                  cardActions={cardActions}
                  dashboardActions={dashboardActions}

                />)

            })

          }
          <NewColumn
            dashboardActions={dashboardActions}
          />


        </S.ColumnsContainer>
        {Boolean(cardOpen) ?
          <CardFull
            closeCardOpen={dashboardActions.closeCardOpen}
            refreshDashboard={dashboardActions.refreshDashboard}
            dashboardActions={dashboardActions}
            cardActions={cardActions}

          />
          : null}
        {dashboard_id && <Chat/>}

      </S.Dashboard>
    )
  }
;
export default withScroll(Dashboard)

const S = {};
S.Dashboard = styled.div`
  display : flex;
  flex-direction : column;
  background-color: ${p => p.theme.color.card};
  height : 100%;
  width : 100%;
 padding-bottom : 5px;
`;
S.ColumnsContainer =  styled.div`
  display : flex;
  flex-direction : row;
  padding-left :10px;
  
 align-items : flex-start;
 overflow-x: auto;
  overflow-y: hidden;
  flex-grow :1;
 
::-webkit-scrollbar {
  width: 12px;
  height: 12px;
   
}
::-webkit-scrollbar-button {
  width: 4px;
  height: 4px;
}
::-webkit-scrollbar-thumb {
  background: rgba(255,255,255,0.69);
  border-radius: 24px;
}
 
 
::-webkit-scrollbar-track {
  background: rgba(0,0,0,0.16);
  
  border-radius: 24px;
}
 
::-webkit-scrollbar-corner {
  background: transparent;
}
 

` ;
