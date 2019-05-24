import React from 'react'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogTitle from '@material-ui/core/DialogTitle';
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardConent from '@material-ui/core/CardContent'
import {withStyles} from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import CardContentText from "@material-ui/core/CardContent"
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography'
import PropTypes from 'prop-types'

const DashboardCardFull = (props) => {

  const {
    currentCard,
    handleCloseCard,
    notifications
  } = props;
  const {
    name,
    content,

  } = currentCard;

  return (
    <Dialog
      open={Boolean(currentCard)}
      onClose={handleCloseCard}
      fullWidth={true}
      maxWidth='md'
    >
      <DialogContent>
        <Grid container
              direction="row"
              justify="flex-start"
              alignItems="flex-start"
              spacing={4}
        >
          <Grid item
                container
                direction="column"
                xs={9}
          >
            <Grid item>
              <Card
                elevation={0}
              >
                <CardHeader
                  style={{}}
                  title={"Имя"}
                  action={
                    <Button style={{marginLeft: 10}} variant="contained">Изменить</Button>
                  }
                />
                <CardConent>
                  {name}
                </CardConent>
              </Card>
            </Grid>
            <Grid item>
              <Card
                elevation={0}
              >
                <CardHeader
                  style={{}}
                  title={"Описание"}
                  action={
                    <Button style={{marginLeft: 10}} variant="contained">Изменить</Button>
                  }
                />
                <CardConent>
                  {content}
                </CardConent>
              </Card>
            </Grid>
            <Grid item>
              <Card
                elevation={0}
              >
                <CardHeader
                  style={{}}
                  title={"Комментарии"}
                />
                <CardConent>
                  Добавить комментарий
                </CardConent>
              </Card>
            </Grid>

          </Grid>


          <Grid item
                container
                xs={3}
                justify="center"
                direction="column"

          >
            <Grid item>
             <Button>
               Добавить чеклист
             </Button>
            </Grid>
            <Grid item>
              <Button>
                Прикрепить файл
              </Button>
            </Grid>
            <Grid item>
              <Button>
                Архивировать
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </DialogContent>
    </Dialog>
  )
};

DashboardCardFull.propTypes = {
  currentCard: PropTypes.shape({
    name : PropTypes.string,
    content : PropTypes.string,
  }).isRequired,
  handleCloseCard : PropTypes.func.isRequired,
  notifications : PropTypes.array.isRequired,
};

export default DashboardCardFull