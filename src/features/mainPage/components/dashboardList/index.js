import React from 'react'
import styled from 'styled-components'


const Card = (props) => {
    const {
        dashboardName,
        dashboard_id
    } = props;
    return (
        <S.Card href={/dashboard/ + dashboard_id}>
            <S.CardTitle>
                {dashboardName}
            </S.CardTitle>
        </S.Card>
    )
};

const DashboardList = (props) => {
    const {dashboardList} = props;

    return (
        <S.DashboardList>
            <S.Title>
                Доски
            </S.Title>
            <S.CardContainer>
                {dashboardList.map((dashboard) => {
                    return <Card {...dashboard}/>
                })}
            </S.CardContainer>
        </S.DashboardList>
    )
};
const S = {};

S.DashboardList = styled.div`
display : flex;
padding-left : 30px;
flex-direction : column;
width: 100%;
`;
S.Title = styled.span`
    color: ${p => p.theme.color.darkBlue}
    line-height: 24px;
    margin: 4px 0 0;
    font-size: 16px;
    font-weight: 700;
    text-align : left;
    padding : 10px;
`;
S.CardContainer = styled.div`
  display : grid;
  grid-template-columns: repeat( auto-fit, minmax(170px, 230px));
  grid-gap : 20px;
  padding : 10px;
  @media(max-width:710px) { 
   grid-template-columns: repeat( auto-fit, minmax(170px, 1fr));
  }
`;
S.Card = styled.a`
    color: #fff;
    line-height: 20px;
    text-align: left;
    padding-left :10px;
    padding-top :5px;
    background-color: ${p => p.theme.color.card};
    :hover {
      cursor : pointer;
      background-color: ${p => p.theme.color.cardHover};
    }
     max-width : 300px ;
    height: 96px;
    border-radius: 3px;
       
`;
S.CardTitle = styled.span`
 font-weight : 700;
`;
export default DashboardList