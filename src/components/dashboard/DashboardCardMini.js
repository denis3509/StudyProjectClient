import React from 'react'
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader'
import CardActionArea from '@material-ui/core/CardActionArea'
import IconButton from "@material-ui/core/IconButton"
import Icon from "@material-ui/core/Icon"

import PropTypes from 'prop-types'


const DashboardCardMini = (props) => {
  const {
    card,
    handleOpenCard
  } = props;
  const {name} = card;

  const editCardName = () => {
  };

  return (
    <Card
      square={true}
    >
      <CardActionArea

        onClick={handleOpenCard}
      >
        <CardHeader
          title={name}
          action={
            <IconButton
              disableRipple

              onClick={editCardName}
            >
              <Icon>edit</Icon>
            </IconButton>
          }
        />
      </CardActionArea>
    </Card>
  )
};

DashboardCardMini.propTypes = {
  card : PropTypes.object.isRequired,
  openCard: PropTypes.func.isRequired,
  columnIndex : PropTypes.number.isRequired,
  cardIndex: PropTypes.number.isRequired,
};

export default DashboardCardMini