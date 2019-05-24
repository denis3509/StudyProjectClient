import React, {useState} from 'react'
import styled from 'styled-components'
import TextInput from "../../../UI/inputs/TextInput";
import LoginButton from "../../../UI/buttons/LoginButton";

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const handleChangeEmailInput = (event) => {
    setEmail(event.target.value);
  };
  const handleChangePassInput = (event) => {
    setPass(event.target.value);
  };
  const {userActions, error} = props;

  return (
    <S.Card>
      <S.TextInput
        value={email}
        onChange={handleChangeEmailInput}
        type={'email'}
      />
      <S.TextInput
        value={pass}
        onChange={handleChangePassInput}
        type={'password'}
      />
      {error ? <S.ErrorText>{error}</S.ErrorText> : null}
      <LoginButton
        onClick={() => userActions.login(email, pass)}
        text={'Войти'}
      />

    </S.Card>
  )
};
const S = {};

S.Card = styled.div`
  display : flex;
  flex-direction: column;
  min-width: 200px;
  min-height: 500px;
  margin : 150px auto;
  max-width: 300px;
`
S.TextInput = styled(TextInput)`
margin-bottom : 5px;
`
S.ErrorText = styled.div`
color : red;
margin-bottom: 5px;
`
export default Login