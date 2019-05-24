import React, {useState} from 'react'
import Grid from '@material-ui/core/Grid'
import Column from './Column'
import {dashboardClient} from './../../constants/mainPage'
import DashboardCardFull from './DashboardCardFull/DashboardCardFull'

const Dashboard = () => {

  const [currentCard, setCurrentCard] = useState(null);
  const {columns} = dashboardClient;

  const openCard = (columnIndex) => (cardIndex) => {
    console.log("indexes: ", columnIndex + " " + cardIndex);
    setCurrentCard(dashboardClient.columns[columnIndex].cards[cardIndex]);
  };

  const closeCard = () => {
    setCurrentCard(null);
  };

  const handleAddNewCard = (columnIndex) => (cardName) => {

  };

  return (
    <Grid container
          spacing={8}
          direction="row"

    >
      <Grid item
            container
            direction="row"
            justify="flex-start"
            alignItems="flex-start"
            spacing={16}
      >

        {
          columns.map((column, columnIndex) => {
              return (
                <Grid item>
                  <Column
                    column={column}
                    openCard={openCard(columnIndex)}
                    handleAddNewCard={handleAddNewCard(columnIndex)}
                  />
                </Grid>
              )

            }
          )
        }
      </Grid>
      {currentCard && <Grid item>
        <DashboardCardFull
          currentCard={currentCard}
          handleCloseCard={()=>closeCard()}
        />
      </Grid>
      }

    </Grid>
  )


};

export default Dashboard