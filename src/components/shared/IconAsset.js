import React, { Component } from 'react';
const baseAsset = '../../assets/Icon';

export class ArrowDropDown extends Component {
   render() {
      return (
         <img src={baseAsset + '/mdi_arrow_drop_down.png'} alt="" />
         // <img src="../../assets/Icon/mdi_arrow_drop_down.png" alt=""/>
      );
   }
}

export default { ArrowDropDown };
