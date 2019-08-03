import React, {Fragment, useState, useEffect, useRef} from 'react'
import styled from 'styled-components'

const OutsideClick = WrappedComponentOpen => WrappedComponentClose => props => {



    const [open, setOpen] = useState(false);
    const [windowHeight, setWindowHeight] = useState(window.innerHeight);
    const node = useRef();

    const handleResize = ()=>{
      setWindowHeight(window.innerHeight);
    };
    const handleClick = e => {

      if (node.current.contains(e.target)) {
        // inside click
        return;
      }
      // outside click
      setOpen(false);
    };


    useEffect(() => {

      document.addEventListener('click', handleClick);
      window.addEventListener('resize',handleResize);
      return () => {

        document.removeEventListener('click', handleClick);
        window.addEventListener('resize',handleResize);
      }
    }, []);


    if (open)
      return (
        <S.Outside>
          <WrappedComponentOpen/>
        </S.Outside>
      )
      return <WrappedComponentClose
        onClick={()=>setOpen(true)}
      />
  }
;


const S = {};
S.Outside = styled.div`
position : fixed;
top : 0;
left : 0;
`

export default OutsideClick;


