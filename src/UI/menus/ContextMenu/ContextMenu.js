import React, {Fragment, useRef, useEffect} from 'react'
import styled from 'styled-components'


const Element = (props) => {
  const {component, title} = props;
  switch (component) {
    case "a" : {
      return <S.ElementA {...props}>{title}</S.ElementA>
    }
    case "button" : {
      return <S.ElementButton {...props}>{title}</S.ElementButton>
    }
    default : {
      return <S.ElementButton {...props}>{title}</S.ElementButton>
    }
  }
};
const Group = (props) => {
  const {group} = props;
  return (
    <Fragment>
      <S.Divider/>
      {
        group.map((element) => {
          return (
            <Element {...element}/>
          )
        })
      }
    </Fragment>
  )
};

const ContextMenuComponent = (props) => {
  const {open, setOpen, groups, title} = props;

  const node = useRef();

  const handleClick = e => {
    if (node.current.contains(e.target)) {
      // inside click
      return;
    }
    // outside click
    setOpen(false)
  };

  useEffect(() => {
    // add when mounted
    document.addEventListener("click", handleClick);
    // return function to be called when unmounted
    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);


    //const {groups} = this.props;

    return (
      <S.MenuWrapper ref={node}>
        <S.Title>{title}</S.Title>
        {
          groups.map((group) => {
            return (
              <Fragment>
                <Group
                  group={group}
                />
              </Fragment>
            )
          })
        }

      </S.MenuWrapper>
    )

};

const ContextMenu = (props) => {
  const {open, setOpen} = props;


  return (
    <S.Container >
      {open && <ContextMenuComponent

        {...props}/>}
    </S.Container>
  )

};
const S = {};
S.ElementButton = styled.button`
 color : ${p => p.theme.color.darkBlue};
  width : 100%;
  height: 32px;
   text-align : left;
   vertical-align : center;
   padding : 4px;
   font-size: 14px;
   line-height: 20px;
   font-weight: 400;
   padding-left : 20px;
   background-color:  white;
  :hover {
    background-color: ${p => p.theme.color.menuItem};
    color : white;
    border: 1px solid ${p => p.theme.color.menuItem};
 
  }
`;
S.ElementA = styled.a`
  color : ${p => p.theme.color.darkBlue};
  width : 100%;
  height: 32px;
   text-align : left;
   vertical-align : center;
   padding : 4px;
   font-size: 14px;
   line-height: 20px;
   font-weight: 400;
   padding-left : 20px;
  :hover {
    background-color: ${p => p.theme.color.menuItem};
    color : white;
    border: 1px solid ${p => p.theme.color.menuItem};
 
  }
`;
S.Divider = styled.div`
  height: 0;
  border-bottom : 1px solid ${p => p.theme.color.divider};
  margin : 10px 0;
`;
S.MenuWrapper = styled.div`
  z-index : 10;
  margin-right : 10px;
  right : 3px;
  top: 3px;
  position : absolute;
  display : flex;
  flex-direction : column;
  width : 304px;     
  background : white;
  border-radius : 5px;
  border : 1px solid ${p => p.theme.color.divider} ;   
  box-shadow: 0 8px 16px -4px rgba(9,30,66,.25), 0 0 0 1px rgba(9,30,66,.08);
  padding : 10px 0px;
  overflow: hidden;    
 
`;
S.Title = styled.span`
    box-sizing: border-box;
    color: #6b778c;
    display: block;
    line-height: 32px;
    
    margin: 0 12px;
    overflow: hidden;
    padding: 0 32px;
    position: relative;
    text-overflow: ellipsis;
    white-space: nowrap;
     
`;
S.Container = styled.div`
 
position : relative;
z-index : 9;
`
export default ContextMenu;