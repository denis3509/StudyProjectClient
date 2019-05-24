import React, {Fragment, useState} from 'react'
import Input from "@material-ui/core/Input"
import IconButton from "@material-ui/core/IconButton"
import Icon from "@material-ui/core/Icon"
import PropTypes from "prop-types"
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'

const NewCardField = (props) => {

  const [InputValue, setInputValue] = useState("");
  const {
    handleAddNewCard,
  } = props;

  return (
    <Card
      square={true}
    >
      <CardContent>
        <Input
          value={InputValue}
          onChange={(event) => {
            setInputValue(event.target.value)
          }}
        />
        <IconButton
          onClick={() =>
            handleAddNewCard(InputValue)}
        >
          <Icon>add_circle</Icon>
        </IconButton>
      </CardContent>
    </Card>
  )
};
NewCardField.PropTypes = {
  handleAddNewCard: PropTypes.func.isRequired,
};
export default NewCardField;