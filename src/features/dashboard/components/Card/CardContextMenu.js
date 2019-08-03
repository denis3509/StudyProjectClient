import React, {Fragment, useRef, useEffect, useState} from 'react'
import styled from 'styled-components'


const ContextMenuComponent = (props) => {
  const {
    open,
    setOpen,
    removeCard,
    handleSave,
    handleKeyPress,
    handleDelete,
    setValue
  } = props;
  const {  value} = props;


  const [windowHeight, setWindowHeight] = useState(window.innerHeight);

  const node = useRef();

  const handleClick = e => {
    if (node.current.contains(e.target)) {
      // inside click
      return;
    }
    // outside click
    setOpen(false)
  };

  const handleResize = () => {

    setWindowHeight(window.innerHeight);
  };

  useEffect(() => {

    document.addEventListener("click", handleClick);
    window.addEventListener("resize", handleResize);

    return () => {
      document.removeEventListener("click", handleClick);
      window.removeEventListener("resize", handleResize);
    };
  }, []);


  //const {groups} = this.props;

  return (

    <S.MenuWrapper
      height={windowHeight}
      ref={node}
    >
      <S.TextArea
        onKeyPress={handleKeyPress}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <S.Buttons>
        <S.Button
          onClick={handleDelete}
        >
          Удалить
        </S.Button>
      </S.Buttons>


    </S.MenuWrapper>


  )

};

const CardContextMenu = (props) => {
  const {open} = props;


  return (
    <S.Container>
      {open && <ContextMenuComponent   {...props}/>}
    </S.Container>
  )

};
const S = {};
S.Buttons = styled.div`
display : flex;
flex-direction : column;
align-items:flex-start;
margin: 4px 0 0 4px;
 
`

S.Button = styled.button`
  color: ${p => p.theme.color.white1};
  padding: 6px 12px 6px 8px;
  background: rgba(0,0,0,.6) !important;
  border-radius : 3px;
  :hover  {
    margin-left :4px;
    background: rgba(0,0,0,.7) !important;
  }
`;
S.MenuWrapper = styled.div`
 position : absolute;
 top : -4px;
 left : -4px;
 z-index : 10;
 display : flex;
 flex-direction : row;
 
`;
S.TextArea = styled.textarea`
  background-color: white;
  text-align: left;
  color : ${p => p.theme.color.darkBlue};
  border-radius : 3px;
  line-height: 20px;  
  margin : 4px 0px 4px 0px;
  border : none;
  min-height : 54px;
  max-height: 154px;
  box-shadow: 0 1px 0 rgba(9,30,66,.25);     
  padding :  4px 4px 6px 8px;
  position : relative;
  resize : none;
  width: 100%;
  height : 125px;
   width : 250px;
`;


S.Container = styled.div`
 position: relative;
 z-index: 10;
`;
export default CardContextMenu;