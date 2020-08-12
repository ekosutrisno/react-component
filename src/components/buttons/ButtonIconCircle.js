import React, { Component } from 'react';

export class ButtonIconCircle extends Component {
   render() {
      const props = this.props;
      let className = 'w-8 h-8 rounded-full focus:outline-none hover:bg-gray-300 hover:text-blue-900 hover:shadow-sm transition-all duration-200 ease-in-out focus:bg-gray-200 focus:text-blue-900';
      if (props.primary) {
         className += ' bg-blue-900 text-white';
      }
      if (props.shadow) {
         className += ' shadow-md';
      }

      if (props.border) {
         className += ' border border-blue-900';
      }

      return (
         <button
            className={className}>
            <span className={props.icon}>{props.btnText}</span>
         </button>
      );
   }
}

export default ButtonIconCircle;
