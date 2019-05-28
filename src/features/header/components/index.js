import React, {useState} from 'react';
import styled from 'styled-components'

import HeaderButton from "../../../UI/buttons/HeaderButton";
import NameButton from "../../../UI/buttons/NameButton";
import ContextMenu from "../../../UI/menus/ContextMenu/ContextMenu";

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
      component: "a",
    }
  ],

];

const Header = (props) => {

  const {userName} = props;
  const {setOpenModal} = props;

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <S.Header
    >
      <S.LeftButtons>
        <HeaderButton>
          <S.Icon className={'fas fa-home'}/>
        </HeaderButton>
        <HeaderButton>
          <S.Icon className={'fas fa-columns'}/>
          Доски
        </HeaderButton>
      </S.LeftButtons>
      <S.RightButtons>
        <HeaderButton
          onClick={()=>setOpenModal(true)}
        >
          <S.Icon className={'fas fa-plus'}/>
        </HeaderButton>
        <NameButton
          name={userName}
          onClick={() => setMenuOpen(!menuOpen)}
        />
        <ContextMenu
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