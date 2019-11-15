import React, {useState} from 'react'
import styled from 'styled-components'
import {connect} from 'react-redux'

const TargetColumn = (props) => {
    const {

        dashboardActions,
        columnInd,
        column_id,
        columnDnD
    } = props;
    const {
        columnHeightDnD,
        dashboard_id,
        columnSource_id,
        columnSourceInd,
    } = columnDnD;
    const [over, setOver] = useState(false);

    const handleOnDragOver = (e) => {
        e.preventDefault();
        setOver(true);
    };
    const handleOnDragLeave = () => {
        setOver(false);
    };
    const handleOnDrop = () => {
        dashboardActions.replaceColumn(
            dashboard_id,
            columnSource_id,
            columnSourceInd,
            columnInd
        );
        setOver(false);

    };

    return (
        <S.TargetColumn
            columnHeight={columnHeightDnD}
            over={over}
            onDragOver={handleOnDragOver}
            onDragLeave={handleOnDragLeave}
            onDrop={handleOnDrop}
        >

        </S.TargetColumn>
    );
};

const S = {};

S.TargetColumn = styled.div`
 height : ${p => p.over ? p.columnHeight + 'px' : 100 + 'px' };
 width : ${p => p.over ? 272 + 'px' : 4 + 'px'};
 background :${p => p.over ? 'rgba(0,0,0,0.4)' : 'rgba(0,0,0,0)' } ;
 border-radius : 3px;
  display : block;
 margin : 0px -2px;
 align-self: ${p => p.over ? 'flex-start' : 'stretch' };
`;
const mapStateToProps = (state) => ({
    dashboard_id: state.dashboard_id,
    columnDnD: state.dashboard.columnDnD,
});

export default connect(mapStateToProps)(TargetColumn)