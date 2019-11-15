import React, {useState} from 'react'
import styled from 'styled-components'
import {connect} from 'react-redux'

const mapStateToProps = (state) => ({

  dashboard_id: state.dashboard.dashboard_id,
  cardDnD: state.dashboard.cardDnD,
});

const TargetCard = (props) => {
  const {
    cardDnD,
    columnInd,
    cardInd,
    dashboardActions,
    column_id
  } = props;

  const [over, setOver] = useState(false);

  const handleOnDragOver = (e) => {
    e.preventDefault(e);
    setOver(true);

  };

  const handleOnDragLeave = () => {
    setOver(false);

  };
  const handleOnDrop = (e) => {

    setOver(false);

    const {
      dashboard_id,
      card_id,
      columnSource_id,
      columnSourceInd,
      cardSourceInd,
    } = cardDnD;

    dashboardActions.replaceCard(
      dashboard_id,
      card_id,
      columnSource_id,
      columnSourceInd,
      cardSourceInd,
      column_id,
      columnInd,
      cardInd)
  };

  return (
    <S.Target

      onDragOver={handleOnDragOver}
      onDragLeave={handleOnDragLeave}
      onDrop={handleOnDrop}
      over={over && cardDnD.cardHeightDnD}
      width={250}
      height={cardDnD.cardHeightDnD}
    >

    </S.Target>
  )
};

const S = {};

S.Target = styled.div`
 width : ${p => p.width + 'px' };
 height : ${p => p.over ? p.height + 'px' : 4 + 'px'};
 background :${p => p.over ? 'rgba(0,0,0,0.4)' : 'rgba(0,0,0,0)' } ;
 border-radius : 3px;
display : block;
 
`;

export default connect(mapStateToProps)(TargetCard)