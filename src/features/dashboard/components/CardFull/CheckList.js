import React from 'react'
import styled from 'styled-components'
import SimpleButton from "../../../../UI/buttons/SimpleButton";
import CardFullTitle from "../../../../UI/titles/CardFullTitle";

const CheckList = (props) => {
  const {
    checkListName,
    tasks
  } = props;

  const progress = tasks.reduce((prev, curr) => curr.checked ? (prev + 1) : (prev), 0) / tasks.length * 100;
  console.log('progress', progress);
  return (
    <S.CheckList>
      <S.Title>
        <S.Text>
          {checkListName}
        </S.Text>
        <S.Button>
          Удалить
        </S.Button>
      </S.Title>
      {
        tasks.length
        ? <S.Progress>
          <S.ProgressPer>{progress + '%'}</S.ProgressPer>
          <S.ProgressBar>
            <S.Success progress={progress}/>
          </S.ProgressBar>
        </S.Progress>
          : null
      }
      <S.TaskContainer>
      {
        tasks.map((task, index) => {
          return <S.Task><S.Checkbox checked={task.checked}/>{task.taskContent}</S.Task>
        })
      }
      </S.TaskContainer>
    </S.CheckList>
  )
};


export default CheckList

const S = {};
S.CheckList = styled.div`
display : flex;
flex-direction : column;
 
`;

S.Text = styled.div`

`;
S.Title = styled(CardFullTitle)`
display : flex;
flex-direction : row;
justify-content : space-between;
align-items : center;
`;
S.Button = styled(SimpleButton)`
float : right;
width: auto;
`;
S.Progress = styled.div`
 display : flex;
 flex-direction : row;
 padding : 10px 5px;
 align-items : center;
`;
S.ProgressPer = styled.div`
padding : 0 5px 5px 0;
`;
S.ProgressBar = styled.div`
background : rgba(96,96,96,0.9);
height : 10px;
width: 100%;
display : flex;
justify-items : flex-start;
border-radius : 5px;
margin-bottom : 5px;
`;
S.Success = styled.div`
  height : 10px;
  width: ${p => p.progress + '%'} ;
  background : ${
  p => (p.progress === 100)
    ? p.theme.color.progressGreen
    : p.theme.color.progressBlue};
  border-radius : ${p =>
  (p.progress === 100)
    ? ' 5px '
    : ' 5px 0 0  5px '};
 
`;
S.Task = styled.div`
display : flex;
flex-direction : row;
`;
S.TaskContainer = styled.div`
display : flex;
flex-direction : column;
justify-content : flex-start;
`;
S.Checkbox = styled.input.attrs({ type: 'checkbox' })`

 
`;