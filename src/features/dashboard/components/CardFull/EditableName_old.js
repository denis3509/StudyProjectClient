import React, {useState, useEffect, Fragment, useRef} from 'react'
import styled from 'styled-components'

const EditableNameComponent = (props) => {
  const {cardName, open} = props;
  const {updateCard, setOpen} = props;


  const [value, setValue] = useState(cardName);
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
    document.addEventListener('click', handleClick);
    return () => {
      document.removeEventListener('click', handleClick)
    }
  }, []);

  if (!open) {
    return <S.Wrapper node={node}>
      <S.Name>
        {cardName}
      </S.Name>
    </S.Wrapper>
  }
  return <S.Wrapper node={node}>
    <S.Input
      value={value}
      onChange={(e)=>setValue(e.target.value)}
    >

    </S.Input>
  </S.Wrapper>

};

const EditableName_old = (props) => {
  const [open, setOpen] = useState(false);
  return <EditableNameComponent
    onClick={() => setOpen(true)}
    open={open}
    setOpen={setOpen}
    {...props}
  />
};

const S = {};

S.Wrapper = styled.div`

`;
S.Name = styled.div`

`;
S.Input = styled.input`

`;

export default EditableName_old