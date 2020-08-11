import React, { Component } from 'react';

export class ButtonDefault extends Component {
   handleClick() {
      console.log('this is:', this);
   }
   render() {
      let property = this.props;
      return (
         <button
            onClick={() => this.handleClick()}
            className="btn-default focus:outline-none border border-blue-900">
            {property.btnText}
         </button>
      );
   }
}

export default ButtonDefault;
