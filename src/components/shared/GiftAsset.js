import React, { Component } from 'react';
const baseGift = '../../assets/gif/96px';

export class Cancel extends Component {
   render() {
      let styleCustom = { width: this.props.width + 'px' };
      return (
         <img style={styleCustom} src={baseGift + '/gif cancel.gif'} alt="" />
      );
   }
}
export class CheckCircle extends Component {
   render() {
      let styleCustom = { width: this.props.width + 'px' };
      return (
         <img style={styleCustom} src={baseGift + '/gif check circle.gif'} alt="" />
      );
   }
}
export class ErrorGift extends Component {
   render() {
      let styleCustom = { width: this.props.width + 'px' };
      return (
         <img style={styleCustom} src={baseGift + '/gif error.gif'} alt="" />
      );
   }
}
export class Loading extends Component {
   render() {
      let styleCustom = { width: this.props.width + 'px' };
      return (
         <img style={styleCustom} src={baseGift + '/gif loading.gif'} alt="" />
      );
   }
}

export default { Cancel, ErrorGift, Loading, CheckCircle };
