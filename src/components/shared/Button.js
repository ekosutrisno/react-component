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
export class ButtonDefaultShadow extends Component {
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

export class ButtonPrimary extends Component {
   handleClick() {
      console.log('this is:', this);
   }
   render() {
      let property = this.props;
      return (
         <button
            onClick={() => this.handleClick()}
            className="btn-primary focus:outline-none hover:bg-gray-300 hover:text-blue-900 hover:shadow-sm transition-all duration-200 ease-in-out focus:bg-gray-200 focus:text-blue-900">
            {property.btnText}
         </button>
      );
   }
}

export class ButtonPrimaryShadow extends Component {
   handleClick() {
      console.log('this is:', this);
   }
   render() {
      let property = this.props;
      return (
         <button
            onClick={() => this.handleClick()}
            className="btn-primary focus:outline-none hover:bg-gray-300 hover:text-blue-900 hover:shadow-sm transition-all duration-200 ease-in-out shadow-md focus:bg-gray-200 focus:text-blue-900">
            {property.btnText}
         </button>
      );
   }
}

export class ButtonLink extends Component {
   render() {
      const p = this.props;
      return (
         <a href={p.href} className="py-1 px-6 text-blue-900 text-sm hover:text-gray-500">{p.btnText}</a>
      );
   }
}

export class ButtonText extends Component {
   render() {
      const p = this.props;
      return (
         <a href={p.href} className="py-1 px-6 text-blue-900 font-semibold hover:text-gray-500">{p.btnText}</a>
      );
   }
}

export default {
   ButtonDefault,
   ButtonDefaultShadow,
   ButtonPrimary,
   ButtonPrimaryShadow,
   ButtonText,
   ButtonLink
};
