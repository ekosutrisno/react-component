import React, { Component } from 'react';

export class ButtonPrimary extends Component {
   handleClick() {
      console.log('this is:', this);
   }
   render() {
      let property = this.props;
      return (
         <button
            onClick={() => this.handleClick()}
            className="btn-default shadow-md focus:outline-none">
            {property.btnText}
         </button>
      );
   }
}

export default ButtonPrimary;
