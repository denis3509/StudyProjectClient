import React, {useState} from 'react'
import styled from 'styled-components'
import {connect} from 'react-redux'

const mapStateToProps= (state) =>({
  height : state.dashboard.cardHeightDnD,
});

const Target = (props) => {
  const {height} = props;

  const [over, setOver] = useState(false);

  const handleOnDragOver = (event) => {

    setOver(true);

  };

  const handleOnDragLeave =()=> {
    setOver(false);

  };
  const handleOnDragEnter =()=>{
    setOver(false);
  };

  return (
    <S.Target
      {...props}
      onDragOver={handleOnDragOver}
      onDragLeave={handleOnDragLeave}
      onDrop={handleOnDragEnter}
      over={over}
      width={250}
      height={height}
    >

    </S.Target>
  )
};

const S = {};

S.Target = styled.div`
 width : ${p=> p.width + 'px' };
 height : ${p=>p.over ?  p.height + 'px' : 4 + 'px'};
 background :${p=>p.over ? 'rgba(0,0,0,0.4)' : 'rgba(0,0,0,0)' } ;
 border-radius : 3px;
  display : block;
 margin : -2px 0;
`;

export default connect(mapStateToProps)(Target)