import React, {Fragment, useState, useEffect, useRef} from 'react'
import styled from 'styled-components'
import {connect} from 'react-redux'
import EditableName_old from './EditableName_old'
import Description from './Description'
import EditableName from "./EditableName";
import LoadingOrError from "../../../../UI/system/LoadingOrError";
import Buttons from './Buttons';
import CheckList from './CheckList'

const CardFull = (props) => {

  const {
    cardOpen,
    cardName,
    content,
    isLoading,
    error,
    cardActions,
    dashboardActions,

  } = props;

  const [windowHeight, setWindowHeight] = useState(window.innerHeight);


  const node = useRef();

  const handleClick = e => {

    if (node.current.contains(e.target)) {
      // inside click
      return;
    }
    // outside click
    dashboardActions.closeCardOpen();
  };
  const handleResize = () => {
    setWindowHeight(window.innerHeight);
  };

  useEffect(() => {

    document.addEventListener('click', handleClick);
    window.addEventListener("resize", handleResize); //TODO resize
    return () => {
      window.removeEventListener("resize", handleResize);
      document.removeEventListener('click', handleClick);
    }
  }, []);
  if (isLoading || error) return (
    <S.ModalBackground height={windowHeight}>
      <S.CardFull ref={node}>
        <LoadingOrError
          isLoading={isLoading}
          error={error}

        />
      </S.CardFull>
    </S.ModalBackground>
  );

  return (
    <S.ModalBackground height={windowHeight}>
      <S.CardFull ref={node}>
        <S.Top>
          <EditableName
            cardOpen={cardOpen}
            cardName={cardName}
            cardActions={cardActions}
            dashboardActions={dashboardActions}
          />
          <S.Icon
            style= {{marginLeft : 'auto'}}
            onClick={()=>dashboardActions.closeCardOpen()}
            className="fas fa-times"/>
        </S.Top>

        <S.Center>
          <S.Main>
            <Description
              cardActions ={cardActions}
              content={content}
              cardOpen={cardOpen}
              dashboardActions={dashboardActions}
            />
            <CheckList/>

          </S.Main>
          <S.Right>
            <Buttons
              cardOpen={cardOpen}
              cardActions={cardActions}
              dashboardActions={dashboardActions}
            />
          </S.Right>
        </S.Center>
      </S.CardFull>
    </S.ModalBackground>

  );
};


const S = {};
S.ModalBackground = styled.div`
  background-color :  rgba(0,0,0,0.4);
 
  height: ${p => p.height + 'px'};
  width : 100%;
  cursor : default;
  top:0;
  left :0;
  display : flex;
  position: fixed;
  z-index:10;
`;
S.CardFull = styled.div`
 width : 768px;
 min-height : 600px;
 padding : 20px;
 display : flex;
 flex-direction : column;
 z-index:11;
 background-color: ${p => p.theme.color.gray1};
 margin : 100px auto;
 border-radius : 3px;
`;
S.Main = styled.div`
  display : flex;
  flex: 3;
  flex-direction : column;
  padding-right : 10px;
`;
S.Right = styled.div`
 display : flex;
 flex: 1;
 flex-direction : column;
`;
S.Top = styled.div`
display : flex;
flex-direction : row;
justify-content : stretch;
`;
S.Center = styled.div`
 display : flex;
 flex-direction : row;
 @media (max-width : 550px) {
  flex-direction : column;
 }
`;

S.Icon = styled.i`
 margin : 1px;
 height: 33px;
 font-size: 20px;
    font-weight: 600;
    :hover {
    cursor : pointer;
    }
`;


export default CardFull;


