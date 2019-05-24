import React from 'react'
import styled from 'styled-components'
import LoadingOrError from "../../../UI/system/LoadingOrError";
import DashboardHeader from './DashboardHeader'
import Column from './Column'

const Dashboard = (props) => {
  const {
    dashboardName,
    error,
    isLoading,
    columns
  } = props;
  console.log(dashboardName);
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
            />
          })
        }
      </S.ColumnWrapper>

    </S.DashboardWrapper>
  )
};
export default Dashboard
const S = {};
S.DashboardWrapper = styled.div`
  display : flex;
  flex-direction : column;
`;
S.ColumnWrapper = styled.div`
  display : flex;
  flex-direction : row;
  margin : 10px;
 
`;