import React from 'react'
import styled from 'styled-components'
import LoadingOrError from "../../../UI/system/LoadingOrError";
import DashboardHeader from './DashboardHeader'
import Column from './Column'
import NewColumn from './NewColumn'


const Dashboard = (props) => {
    const {
      dashboardName,
      error,
      isLoading,
      columns
    } = props;
    const {
      newColumn,
      newCard
    } = props;

    if (isLoading || error) return (
      <LoadingOrError
        isLoading={isLoading}
        error={error}
        modalRedirect={"/home/dashboardList"}
      />
    )

    return (
      <S.DashboardWrapper>
        <DashboardHeader
          {...props}
        />
        <S.ColumnWrapper>
          {
            columns.map((column) => {
              return <Column
                column={column}
                newCard={newCard}
              />
            })
          }
          <NewColumn
            newColumn={newColumn}/>


        </S.ColumnWrapper>

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
