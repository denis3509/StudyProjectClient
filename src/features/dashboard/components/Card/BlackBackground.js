import React, {useEffect, useState, Fragment} from 'react';
import styled from 'styled-components'

const BlackBackgroundComponent = (props) => {

  const [windowHeight, setWindowHeight] = useState(window.innerHeight);

  const handleResize = () => {
    setWindowHeight(window.innerHeight);
  };
  useEffect (() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    }
  }, []);
  return (
    <S.Background
      windowHeight={windowHeight}
    />
  );
};

const BlackBackground = (props) => {
  const {open} = props;
  return (
    <Fragment>
      {open && <BlackBackgroundComponent/>
      }
    </Fragment>
  )
}

const S = {};
S.Background = styled.div`
 position: fixed;
 top:0;
 left: 0;
 width : 100%;
 height: ${p => p.windowHeight + 'px'};
 background : rgba(0,0,0,0.8);
 z-index : 9;
`


export default BlackBackground