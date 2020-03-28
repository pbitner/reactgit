import React from 'react'
import ReactDOM from 'react-dom'
import Header from './Header'
import Content from './Content'
import Footer from './Footer'
import './index.css'

const headerEl = document.getElementById('header');
const contentEl = document.getElementById('content');
const footerEl = document.getElementById('footer');


ReactDOM.render(
  <Header />,
  headerEl
);

ReactDOM.render(
  <Content />,
  contentEl
);

ReactDOM.render(
  <Footer />,
  footerEl
);

