import React from 'react'
import styled from 'styled-components'

const menuItems = [
  {
    title: "Доски",
    href: "dashboardList"
  },
  {
    title: "Лента",
    href: "feed",
  },
  {
    title: "Профиль",
    href: "profile"
  }
];

const LeftMenu = (props) => {
  const {match} = props;
  console.log(match);
  return (
    <S.MenuWrapper>
      {
        menuItems.map((item) => {
          return <S.MenuItem  href={item.href}>
            {item.title}
          </S.MenuItem>
        })
      }
    </S.MenuWrapper>
  )

};

const S = {};
S.MenuWrapper = styled.div`
  display : flex;
  flex-direction : column;
  width : 150px;
`;
S.MenuItem = styled.a`
  text-align : left;
  padding : 0 10px;
 font-weight: 700;
  color: ${p => p.theme.color.darkBlue};
  border-radius: 4px;
  background-color : ${p => p.selected ? p.theme.color.selectedMenuItem : ""};
  line-height : 32px;
  margin-bottom : 5px;
  :hover {
     background-color : ${p => p.selected ? p.theme.color.selectedMenuItem : "#e3e3e3"};
     cursor : pointer;
  }
`;

export default LeftMenu