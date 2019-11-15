import React from 'react'
import styled from 'styled-components'
//senseless
const withScroll = WrappedComponent => {
    return styled(WrappedComponent)`
::-webkit-scrollbar {
  width: 10px;
}

/* Track */
::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px grey; 
  border-radius: 10px;
}
 
/* Handle */
::-webkit-scrollbar-thumb {
  background: rgba(193,195,200,0.7); 
  border-radius: 10px;
}

/* Handle on hover */   
::-webkit-scrollbar-thumb:hover {
  background: rgba(133,133,133,0.9); 
}
`
};

export default withScroll