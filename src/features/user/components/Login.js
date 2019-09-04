import React, {useState} from 'react'
import styled from 'styled-components'
import TextInput from "../../../UI/inputs/TextInput";
import LoginButton from "../../../UI/buttons/LoginButton";


const Login = (props) => {
  const [fields, setFields] = useState({
    login: '',
    password: '',
    passwordConfirm: '',
    userName: '',
    email: '',
  });

  const [currentTab, setCurrentTab] = useState('login');

  const handleChangeField = (field) => (event) => {
    const newFields = Object.assign({}, fields);
    newFields[field] = event.target.value;
    setFields(newFields);
  };

  const {userActions, error} = props;

  const handleSignUp = () => {
    userActions.signUp(userName, login, password,passwordConfirm, email)
  };

  const {
    login,
    password,
    passwordConfirm,
    userName,
    email,
  } = fields;
  if (currentTab === 'login') return (
    <S.Card>
      <S.TextInput
        value={login}
        onChange={handleChangeField('login')}
        type={'login'}
      />
      <S.TextInput
        value={password}
        onChange={handleChangeField('password')}
        type={'password'}
      />
      {error ? <S.ErrorText>{error}</S.ErrorText> : null}
      <LoginButton
        onClick={() => userActions.login(login, password)}
        text={'Войти'}
      />
      <S.Link onClick={() => setCurrentTab('signUp')}>Регистрация</S.Link>
    </S.Card>
  );

  if (currentTab === 'signUp')
    return (
      <S.Card>
        <S.TextInput
          placeholder="Логин"
          value={login}
          onChange={handleChangeField('login')}
          type={'text'}
        />
        <S.TextInput
        placeholder="Имя пользователя"
        value={userName}
        onChange={handleChangeField('userName')}
        type={'text'}
        />
        <S.TextInput
          placeholder="Email"
          value={email}
          onChange={handleChangeField('email')}
          type={'email'}
        />
        <S.TextInput
          placeholder='Пароль'
          value={password}
          onChange={handleChangeField('password')}
          type={'password'}
        />
        <S.TextInput
          placeholder='Подтверждение пароля'
          value={passwordConfirm}
          onChange={handleChangeField('passwordConfirm')}
          type={'password'}
        />
        {error ? <S.ErrorText>{error}</S.ErrorText> : null}
        <LoginButton
          onClick={handleSignUp}
          text={'Зарегестрироваться'}
        />
        <S.Link onClick={() => setCurrentTab('login')}>Вход</S.Link>
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
S.Link = styled.button`
margin-top : 5px;
background : none;
 
`
export default Login