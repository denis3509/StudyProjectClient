import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';

const styles = theme => ({
  root: {
    maxWidth: 300,
    backgroundColor: theme.palette.background.paper,
  },
});

function ListItemLink(props) {

  return <ListItem button component="a" {...props} />;
}

function LeftMenu(props) {
  const {classes, listItems} = props;
  return (
    <div className={classes.root}>
      <List component="nav">
        {
          listItems.map((listItem) => {
            return (
              <ListItemLink href={listItem.href}>
                <ListItemText primary={listItem.name}/>
              </ListItemLink>
            )
          })
        }
      </List>
    </div>
  );
}

LeftMenu.propTypes = {
  classes: PropTypes.object.isRequired,
  listItems: PropTypes.array.isRequired,
};

export default withStyles(styles)(LeftMenu);