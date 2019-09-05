import React, {useState} from 'react';
import styled from 'styled-components'

import HeaderButton from "../../../UI/buttons/HeaderButton";
import NameButton from "../../../UI/buttons/NameButton";
import ContextMenu from "../../../UI/menus/ContextMenu/ContextMenu";



const Header = (props) => {

  const {userName, userActions} = props;
  const {setOpenModal} = props;

  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogout = ()=>{
    userActions.logout();
    document.location.href = '/home/dashboardList'
  };
  const groups = [
    [
      {
        title: "Профиль",
        component: "a"

      },
      {
        title: "Доски",
        component: "a"
      }
    ],
    [
      {
        title: "Выйти",
        component: "button",
        onClick: handleLogout,

      }
    ],

  ];
  return (
    <S.Header
    >
      <S.LeftButtons>
        <HeaderButton

        >
          <a href={'/home/dashboardList'}><S.Icon className={'fas fa-home'}/></a>
        </HeaderButton>
        <a href={'/home/dashboardList'}> <HeaderButton>
          <S.Icon className={'fas fa-columns'}/>
            Доски
        </HeaderButton></a>
      </S.LeftButtons>
      <S.RightButtons>
        <HeaderButton
          onClick={() => setOpenModal(true)}
        >
          <S.Icon className={'fas fa-plus'}/>
        </HeaderButton>
        <NameButton
          name={userName}
          onClick={() => setMenuOpen(!menuOpen)}
        />
        <ContextMenu
          title={'Денис Богатырев'}
          open={menuOpen}
          setOpen={setMenuOpen}
          groups={groups}
        />
      </S.RightButtons>
    </S.Header>
  )
};

const S = {};

S.Header = styled.div`
width: 100%;
min-height : 32px;
padding : 4px;
top : 0;
background-color: ${p => p.theme.color.header};
 display : flex;
  
`;
S.LeftButtons = styled.div`
  flex :1;
  display : flex;
  justify-content: flex-start;
`;
S.RightButtons = styled.div`
    flex :1;
    display : flex;
  justify-content: flex-end;
`
S.Icon = styled.i`
 margin-right :3px;
 margin-left :3px;
`;

export default Header;