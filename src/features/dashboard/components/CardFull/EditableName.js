import React, {useState} from 'react'
import styled from 'styled-components'



const EditableName = (props) => {

  const {cardName} = props;

  const {updateCard} = props;

  const [value, setValue] = useState(cardName);



  const handleOnBlur = (event) => {
    updateCard({cardName : event.target.value})
  };
  const handleOnChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <S.Wrapper>
      <S.Icon className="fas fa-digital-tachograph"/>
      <S.TextArea
        onBlur={handleOnBlur}
        onChange={handleOnChange}
        value={value}
      />

    </S.Wrapper>
  )
};


const S = {};
S.TextArea = styled.textarea`
  overflow: hidden;
    overflow-wrap: break-word;
    height: 33px;
    background: transparent;
    border-radius: 3px;
    box-shadow: none;
    font-size: 20px;
    font-weight: 600;
     width: 90%;
    line-height: 24px;
    margin: -4px -8px;
    min-height: 24px;
    padding: 4px 8px;
    resize: none;
    border: none;
    color: ${p => p.theme.color.darkBlue};
    transition-property: background-color,border-color,box-shadow;
    transition-duration: 85ms;
    transition-timing-function: ease;
    outline : 0;
    box-sizing: border-box;
    :focus {
      background : white;   
      box-shadow : 0 0 0 2px ${p => p.theme.color.card};
      border : none;
    }
 `;

S.Wrapper = styled.div`
display : flex;
flex-direction : row;
 margin-bottom : 20px;
  
`;
S.Icon = styled.i`
line-height: 25px;
color: ${p => p.theme.color.darkBlue};
margin-right: 10px;
`
export default EditableName