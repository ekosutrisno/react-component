import React, { Component } from 'react';

export class ButtonDefault extends Component {
   handleClick() {
      console.log('this is:', this);
   }
   render() {
      let property = this.props;
      let className = "btn-default focus:outline-none border border-blue-900";
      return (
         <button
            onClick={() => this.handleClick()}
            className={className}>
            {property.btnText}
         </button>
      );
   }
}

export default ButtonDefault;
