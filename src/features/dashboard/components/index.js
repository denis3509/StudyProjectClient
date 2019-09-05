import React, {useState} from 'react'
import styled from 'styled-components'
import LoadingOrError from "../../../UI/system/LoadingOrError";
import DashboardHeader from './dashboardHeader/DashboardHeader'
import Column from './Column/Column'
import NewColumn from './Column/NewColumn'
import CardFull from '../containers/СardFull'
import {BrowserRouter as Router, Route, Link, Redirect} from "react-router-dom";
import TargetColumn from './Column/TargetColumn'
import Chat from "../../chat/containers";
import Modal from '../../../UI/modals/Modal'

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
      <S.DashboardWrapper>
        <DashboardHeader
        />
        <S.ColumnWrapper>
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


        </S.ColumnWrapper>
        {Boolean(cardOpen) ?
          <CardFull
            closeCardOpen={dashboardActions.closeCardOpen}
            refreshDashboard={dashboardActions.refreshDashboard}
            dashboardActions={dashboardActions}
            cardActions={cardActions}

          />
          : null}
        {dashboard_id && <Chat/>}

      </S.DashboardWrapper>
    )
  }
;
export default Dashboard
const S = {};
S.DashboardWrapper = styled.div`
  display : flex;
  flex-direction : column;
  background-color: ${p => p.theme.color.card};
  height : 100%
`;
S.ColumnWrapper = styled.div`
  display : flex;
  flex-direction : row;
  margin : 10px;
 align-items : flex-start;
`;
