import React, {
  Fragment,
  useState,
  useEffect,
  useRef
} from 'react'
import styled from 'styled-components'

const ModalComponent = (props) => {

  const {open, setOpen, opacity} = props;
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
  const handleResize = ()=>{
    setWindowHeight(window.innerHeight);
  };

  useEffect(() => {
    // add when mounted
    document.addEventListener("click", handleClick);
    window.addEventListener("resize",handleResize); //TODO resize
    // return function to be called when unmounted
    return () => {
      document.removeEventListener("click", handleClick);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <S.ModalBackground
      height={windowHeight}
    >
      <S.Children
        ref={node}
      >

        {props.children}

      </S.Children>
    </S.ModalBackground>
  )
};


const Modal = (props) => {
  const {open} = props;


  return (
    <Fragment>
      {
        open && <ModalComponent {...props}/>
      }
    </Fragment>
  )
};

const S = {};
S.ModalBackground = styled.div`
  background-color : ${p=>`rgba(0,0,0,${p.opacity ? p.opacity : 0.4})`};
 
  height: ${p => p.height + 'px'};
  width : 100%;
  position :absolute;
  top:0;
  left :0;
  display : flex;
   
  z-index:9;
`;
S.Children = styled.div`
 position : relative;
  z-index: 100;
 margin: 300px auto;
  
`;

export default Modal