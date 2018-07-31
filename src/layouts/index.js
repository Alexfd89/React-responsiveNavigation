import React from "react";
import {Div, H3} from "glamorous";
import { css } from "glamor";
import Link from "gatsby-link";
import Header from '../components/header/Header';

export default ({ children }) => (
  <div>
    <Header/>
    <main style={{marginTop: '64px'}}>
      {children()}
    </main>  
  </div>
  
);