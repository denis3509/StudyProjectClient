import React from 'react'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemSecondaryAction from  '@material-ui/core/ListItemSecondaryAction'
import { withStyles } from '@material-ui/core/styles';

const styles = {
  listItem : {
    borderRadius :3,
  }
};
const DashboardCardList = (props)=> {

  const {classes,cards} =props;

  return (
    <List>
      {cards.map((card)=>{
        return (
          <ListItem button className={classes.listItem}>
            <ListItemText
              primary={card}
            />
          </ListItem>
        )
      })}

    </List>
  )
};

export default withStyles(styles)(DashboardCardList)