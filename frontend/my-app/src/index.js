import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import Menu from './Menu';
import MySlider from './Slider';
import reportWebVitals from './reportWebVitals';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// const root = ReactDOM.createRoot(document.getElementById('root'));
const headerMenu = ReactDOM.createRoot(document.getElementById('headerMenu'));
const main = ReactDOM.createRoot(document.getElementById('main'));
headerMenu.render(
  <React.StrictMode>
    <Menu />
    
   
  </React.StrictMode>
);

main.render(
  <React.StrictMode>
   <MySlider />
    
   
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
