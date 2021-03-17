import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app/App';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

const theme = createMuiTheme({
  palette: {
    type: "dark",
    primary: {
      main: "#12c2e9", // This is an orange looking color
      light: '#fff',
      mainGradient: "linear-gradient(to right top, #370528, #801f3a, #c14f36, #e8921d, #ebe012);",
    },
    secondary: {
      main: "#fff" //Another orange-ish color
    },
    typography: {
      color: "#fff",
    },
    dividerColor:{
      backgroundColor:'#848484'
    }
  },
});

ReactDOM.render(
  <React.StrictMode>
   <ThemeProvider theme={theme}><App /></ThemeProvider> 
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
