import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CardHeader from '@material-ui/core/CardHeader';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { Link } from 'react-router-dom'
const styles = {
  card: {
    maxWidth: 300,
    minWidth: 300,
    //backgroundColor: "blue",

  },

};

function DashboardCard(props) {
  const { classes,name,description, picture,id } = props;
  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardHeader
          action={
            <IconButton>
              <MoreVertIcon />
            </IconButton>
          }
        />

        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {name}
          </Typography>
          <Typography component="p">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button component={Link} to={`/dashboard/:${id}`} size="small" color="primary">
          Открыть
        </Button>

      </CardActions>
    </Card>
  );
}

DashboardCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DashboardCard);