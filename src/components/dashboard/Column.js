import React from 'react'
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Grid from "@material-ui/core/Grid"
import Card from "@material-ui/core/Card"
import CardHeader from "@material-ui/core/CardHeader"
import CardContent from "@material-ui/core/CardContent"
import MoreVertIcon from '@material-ui/icons/MoreVert';
import IconButton from '@material-ui/core/IconButton';
import CardActions from "@material-ui/core/CardActions"
import Input from "@material-ui/core/Input"
import NewCardField from "./NewCardField"
import DashboardCardMini from "./DashboardCardMini"

const styles = theme => ({
  root: {
    //...theme.mixins.gutters(),
    padding: 0,
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    minWidth: 220,
    margin: 0,

  },
  cardContent : {
    padding: 10,
  }
});

const cards = [1, 2, 3, 4, 5];

const Column = (props) => {

  const {
    classes,
    column,
    columnIndex,
    openCard,
    handleAddNewCard
  } = props;

  const {
    name,
    cards
  } = column;

  return (
    <Card className={classes.root}>
      <CardHeader
        action={
          <IconButton>
            <MoreVertIcon/>
          </IconButton>
        }
        title={name}
      />
      <CardContent
        className={classes.cardContent}
      >
        <Grid
          container
          direction="column"
          spacing={8}
        >
          {
            cards.map((card, cardIndex) => {
              return (
                <Grid item>
                  <DashboardCardMini
                    card={card}
                    handleOpenCard={()=>openCard(cardIndex)}
                  />
                </Grid>
              )
            })
          }
          <Grid item>
             <NewCardField/>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  )
};

Column.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Column);
