import React, { Fragment } from 'react';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import styledNormalize from 'styled-normalize';

const theme = {
  color : {
    darkBlue : '#172b4d',
    divider: 'rgba(9,30,66,.13)',
    menuItem : '#0079bf',
    selectedMenuItem : '#e4f0f6',
    card : '#0079bf',
    cardHover: '#005ea0',
    header : '#026aa7',
    column : '#dfe1e6',
    columnHover : '#c1c3c8',
    columnCard : '#fafbfc',
    columnCardHover : '#dbdcdd',
    white1 : '#e6e6e6',
    gray1 : '#f4f5f7',
    progressGreen : '#61bd4f',
    progressBlue : '#5ba4cf',
  }
};

const GlobalStyle = createGlobalStyle`
  ${styledNormalize}
  
  html {
    box-sizing: border-box;
    line-height: 1;
    font-size: 14px;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }
  
  body {
    margin: 0;
    padding: 0;
    font-family: 'Open Sans', sans-serif;
    color: #000000;
    background-color: #ffffff;
  }
  
  p {
    margin: 0
  }  
  
  a {
    text-decoration: none;
    color: inherit;
    :hover {
      cursor : pointer;
    }
  }
  
  button {
    border: none;
  }
  
  button:focus {
    outline:0;
  }
      
  button:hover {
    cursor: pointer;
  }
`;

const withTheme = WrappedComponent => () => (
  <ThemeProvider theme={theme}>
    <Fragment>
      <GlobalStyle />
      <WrappedComponent />
    </Fragment>
  </ThemeProvider>
);

export default withTheme;
