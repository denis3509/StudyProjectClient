import React, {useState} from 'react'
import styled from 'styled-components'

let socket = new WebSocket('ws://localhost:8080');
socket.onopen = e => {
  console.log('connected');

};
const Chat = (props) => {

  const {
    dashboard_id,
    userName,
    user_id,
    messages,
    chatActions
  } = props;

  const [message, setMessage] = useState('');
  const [open, setOpen] = useState(false);
  socket.onmessage = event => {
    chatActions.addNewMessage(JSON.parse(event.data))
  };

  const sendMessage = (message) => {
    let data = {
      dashboard_id: dashboard_id,
      author_id: user_id,
      authorName: userName,
      text: message
    };

    socket.send(JSON.stringify(data));

  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      sendMessage(e.target.value);
      setMessage('')
    }
  };
  const handleChange = (e) => {
    setMessage(e.target.value)
  };

  if (open) {
    return (
        <S.Wrapper>
          <S.Header onClick={() => setOpen(false)}>
            Сообщения
          </S.Header>
          <S.ChatWindow>
            {messages.map((message, index) => {
              return <S.Message
                  key={'msg' + index}>{message.authorName.split(' ')[0]}: {message.text}</S.Message>
            })}
          </S.ChatWindow>
          <S.TextArea
              value={message}
              onChange={handleChange}
              onKeyPress={handleKeyPress}
          />
        </S.Wrapper>
    )
  } else {
    return (
        <S.HiddenChat onClick={() => setOpen(true)}>
          <i className="far fa-comments"></i>
        </S.HiddenChat>
    )

  }
};

const S = {};
S.Wrapper = styled.div`
position : fixed;
right : 100px;
bottom : 18px;
width : 300px;
height : 300px;
background : ${p => p.theme.color.column};
border-radius: 3px 3px 0 0;
display : flex;
flex-direction : column;

`;
S.Button = styled.button`
`;
S.TextArea = styled.textarea`
 background : white;
 border-radius : 0px  0px 3px 3px ;
 margin : 10px 10px   5px 10px;
 flex : 1;
`;
S.ChatWindow = styled.div`
 background : white;
 border-radius : 3px 3px 0 0;
 margin : 10px 10px 0 10px;
 flex : 3;
 display : flex;
 flex-direction : column;
 justify-items: flex-start;
 overflow : auto;
`;
S.Header = styled.div`
color : ${p => p.theme.color.darkBlue};
line-height: 32px;
`;
S.Message = styled.div`
width :100%;
text-align : left;
padding : 3px;
`;
S.HiddenChat = styled.button`
  width : 50px;
  height : 50px;
  background : ${p => p.theme.color.column};
  border: 1px solid #BDBFC4;
  border-radius: 3px;
  position : fixed;
  right : 100px;
  bottom : 18px;
  font-weight : 700;
  font-size: 24px;
  color : ${p=>p.theme.color.darkBlue};
`;
export default Chat