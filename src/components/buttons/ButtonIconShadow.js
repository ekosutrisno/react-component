import React, { Component } from 'react';

export class ButtonIcon extends Component {
   render() {
      const p = this.props;
      return (
         <button className="btn-default shadow-md focus:outline-none hover:bg-gray-300 hover:text-blue-900 hover:shadow-sm transition-all duration-200 ease-in-out focus:bg-gray-200 focus:text-blue-900">
            <span className="fa fa-fw fa-search"></span>
            <span className="ml-2">{p.btnText}</span>
         </button>
      );
   }
}

export default ButtonIcon;
