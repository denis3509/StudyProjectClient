import React from 'react'
import Paper from '@material-ui/core/Paper'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import DashboardCardList from './DashboardCardList'

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    width: 220,
  },
});

const cards = [1,2,3,4,5];

class DashboardColumn extends React.Component {
  constructor (state) {
    super(state)
  }

  render(){
    const {classes} =this.props;
    return(
      <Paper className={classes.root}>
        <DashboardCardList
          cards={cards}
        />
      </Paper>
    )
  }
}
DashboardColumn.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DashboardColumn);
