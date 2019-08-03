import React, {useState} from 'react'
import styled from 'styled-components'
import LoadingOrError from "../../../UI/system/LoadingOrError";
import DashboardHeader from './DashboardHeader'
import Column from './Column/Column'
import NewColumn from './Column/NewColumn'
import CardFull from '../containers/СardFull'
import {BrowserRouter as Router, Route, Link, Redirect} from "react-router-dom";

const Dashboard = (props) => {
    const {
      dashboardName,
      error,
      isLoading,
      columns,
      cardOpen,
      cardActions,
      dashboardActions,
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
          dashboardName={dashboardName}
        />
        <S.ColumnWrapper>
          {
            columns.map((column, index) => {
              return <Column
                column={column}
                cardActions={cardActions}
                dashboardActions={dashboardActions}
              />
            })
          }
          <NewColumn
            newColumn={dashboardActions.newColumn}
          />


        </S.ColumnWrapper>
        {Boolean(cardOpen) ?
          <CardFull
            cardOpen={cardOpen}
            closeCardOpen={dashboardActions.closeCardOpen}
            refreshDashboard={dashboardActions.refreshDashboard}

          />
          : null}
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
