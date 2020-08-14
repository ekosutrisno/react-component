import React, { Component } from 'react';


export class ButtonDefault extends Component {
   handleClick() {
      console.log('this is:', this);
   }
   render() {
      let props = this.props;
      let className = "btn-default focus:outline-none hover:bg-gray-300 hover:text-blue-900 hover:shadow-sm transition-all duration-200 ease-in-out focus:bg-gray-200 focus:text-blue-900";
      if (props.border) {
         className += ' border border-blue-900';
      }
      if (props.shadow) {
         className += ' shadow-md';
      }
      return (
         <button
            onClick={() => this.handleClick()}
            className={className}>
            {props.btnText}
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
      let className = "btn-default shadow-md focus:outline-none hover:bg-gray-300 hover:text-blue-900 hover:shadow-sm transition-all duration-200 ease-in-out focus:bg-gray-200 focus:text-blue-900";
      return (
         <button
            onClick={() => this.handleClick()}
            className={className}>
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
      let props = this.props;
      let className = "btn-primary focus:outline-none hover:bg-gray-300 hover:text-blue-900 hover:shadow-sm transition-all duration-200 ease-in-out focus:bg-gray-200 focus:text-blue-900";
      if (props.shadow)
         className += ' shadow-md';
      return (
         <button
            onClick={() => this.handleClick()}
            className={className}>
            {props.btnText}
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
      const props = this.props;
      let className = "py-1 px-6 font-semibold hover:text-gray-500";
      if (props.textWhite)
         className += " text-gray-200";
      else
         className += " text-blue-900";

      return (
         <a href={props.href} className={className}>{props.btnText}</a>
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
