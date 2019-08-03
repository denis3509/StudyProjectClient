import React, {useState, Fragment, useRef, useEffect} from 'react'
import styled from 'styled-components'
import CardContextMenu from "./CardContextMenu";
import BlackBackground from './BlackBackground'
import CardFull from '../CardFull/CardFull'
import Target from './Target'

const CardMini = (props) => {
  const {
    card,
    column_id,
    cardDnD,
    cardHeightDnD
  } = props;
  const {order} = {};
  const {cardName, _id} = card;
  const {
    updateCard,
    removeCard,
    setCardOpen,
    setCardHeightDnD,
    dashboardActions
  } = props;

  const [value, setValue] = useState(cardName);
  const [openContext, setOpenContext] = useState(false);
  const [openCard, setOpenCard] = useState(null);
  const [selected, setSelected] = useState(false);
  const [height,setHeight] = useState(0);

  const ref = useRef(null);


  const handleKeyPress = (event) => {

    if (event.key === 'Enter') {
      handleSave();
    }
  };

  const handleSave = () => {
    updateCard(_id)({cardName: value});
    setOpenContext(false);
  };
  const handleDelete = () => {
    removeCard(_id);
    setOpenContext(false);
  };
  const handleOnDragStart = (event) => {
    event.dataTransfer.setData('text/plain', height + 'px');

    console.log('dragStart',ref.current.clientHeight);
    setCardHeightDnD(ref.current.clientHeight);
    console.log(ref.current.clientHeight)
  };
  const handleOnDragEnd = (event) => {

    console.log('dragEnd')
  };

  return (
    <Fragment>
      <S.CardMini
        ref={ref}
        order={order}
        selected={selected}
        onClick={() => setCardOpen(_id)}
        draggable={"true"}
        onDragStart={handleOnDragStart}
        onDragEnd={handleOnDragEnd}
      >
        <CardContextMenu
          cardName={cardName}
          handleKeyPress={handleKeyPress}
          open={openContext}
          setOpen={setOpenContext}
          value={value}
          setValue={setValue}
          handleDelete={handleDelete}
        />

        <S.EditButton
          onClick={() => setOpenContext(true)}
        >
          <i className={"fas fa-edit"}/>
        </S.EditButton>
        <S.Title>{cardName}</S.Title>

        <BlackBackground open={openContext}/>
      </S.CardMini>
      <Target
        height={cardHeightDnD}
      />
    </Fragment>
  )

};

const S = {};

S.CardMini = styled.a`
  content:"";
	display: ${p => p.selected ? 'none' : 'block'} ;
	clear:both;
  background-color: ${p => p.theme.color.columnCard};
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
  :hover {
   button {
     display : block;
     background-color : ${p => p.theme.color.columnCard};
   }
  }
  
  order : ${p => p.order};
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
   
`
S.Title = styled.div`
  margin :0px;
  word-wrap: break-word;
`;
S.EditButton = styled.button`
  position : absolute;
  right : 0px;
  top : 4px;
  display : none;  
  opacity : 0.7;
  :hover { 
    opacity :1;
  }
 
`;
S.SaveButton = styled.button` 
    background: #61BD4F;
    border-radius: 3px;
    box-shadow: 0 2px 0 #3F6F21;
    min-height: 32px;   
    padding: .6em 1.3em;
    position: relative;
    text-decoration: none;
    border: 0px;
    color: #fff;
    font-weight : bold;
    margin : 0px  0px 8px  0px;
    width : 150px;
`
export default CardMini