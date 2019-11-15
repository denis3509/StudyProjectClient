import React, {useState} from 'react'
import styled from 'styled-components'
import api from '../../logic/api'

const Invite = (props) => {
  const {
    inviteUser,
    setOpen,
    dashboard_id,
  }
    = props;

  const [email, setEmail] = useState('');
  const [error, setError] = useState(null);

  const handleOnChange = (e) => {
    setEmail(e.target.value);
  };
  const handleOnClick = () => {
    api.inviteUser(dashboard_id,email)
      .then(res => {
        setOpen(false);
      })
      .catch(error => {
        let msg  = error && error.response && error.response.data && error.response.data.message;
        setError(msg);
      });
  };
  return (
    <S.Wrapper>
      <S.Input
        value={email}
        onChange={handleOnChange}
        placeholder={'Введите email'}
      />
      {error && <S.Error>{error}</S.Error>}
      <S.Button
        onClick={handleOnClick}
      >
        Пригласить
      </S.Button>
    </S.Wrapper>
  )
};
const S = {};

S.Wrapper = styled.div`
width : 300px;
height : 100px;
background : ${p => p.theme.color.card};
border-radius : 5px;
`;
S.Input = styled.input`
  padding: 2px 8px;
  border: none;
  color: #fff;
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
  outline : 0;
  background: rgba(255,255,255,0.5);
  margin:  10px auto;
  border-radius : 3px; 
`;

S.Button = styled.button`
    background-color: #5aac44;
    box-shadow: 0 1px 0 0 #3f6f21;
    border: none;
    color: #fff;
     
    height : 32px;
    margin : 0px 50px;
    border-radius : 3px;
`
S.Error = styled.div`
color: red;
`
export default Invite