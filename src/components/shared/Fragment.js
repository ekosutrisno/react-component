import React, { Component } from 'react';
import HeaderFragment from '../layouts/HeaderFragment';
import FooterFragment from '../layouts/FooterFragment';
import MainFragment from '../layouts/MainFragment';

export class Header extends Component {
   render() {
      return (
         <HeaderFragment />
      );
   }
}
export class Main extends Component {
   render() {
      return (
         <FooterFragment />
      );
   }
}
export class Footer extends Component {
   render() {
      return (
         <MainFragment />
      );
   }
}

export default {
   Header, Main, Footer
};

