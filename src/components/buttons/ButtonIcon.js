import React, { Component } from 'react';

export class ButtonIcon extends Component {
   render() {
      const props = this.props;
      let className = "focus:outline-none hover:bg-gray-300 hover:text-blue-900 hover:shadow-sm transition-all duration-200 ease-in-out focus:bg-gray-200 focus:text-blue-900";
      if (props.primary) {
         className += ' btn-primary';
      } else if (props.default) {
         className += ' btn-default shadow-md';
      } else {
         className = ' py-2 px-6 text-blue-900 hover:text-blue-700 focus:outline-none';
      }

      if (props.border) {
         className += ' border border-blue-900';
      }

      return (
         <button className={className}>
            <span className={props.icon}></span>
            <span className="ml-2">{props.btnText}</span>
         </button>
      );
   }
}

export default ButtonIcon;
