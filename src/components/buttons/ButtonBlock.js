import React, { Component } from 'react';


export class ButtonBlock extends Component {
   handleClick() {
      console.log('this is: ButtonBlock',);
   }
   render() {
      const props = this.props;
      let className = "min-w-full focus:outline-none hover:bg-gray-300 hover:text-blue-900 hover:shadow-sm transition-all duration-200 ease-in-out focus:bg-gray-200 focus:text-blue-900";

      if (props.shadow)
         className += ' shadow-md';

      if (props.primary) {
         className += ' btn-primary';
      } else {
         className += ' btn-default ';
      }

      return (
         <button
            onClick={() => this.handleClick()}
            className={className}>
            {props.btnText}
         </button>
      );
   }
};
export class ButtonBlockText extends Component {
   render() {
      const props = this.props;
      let className = "py-1 px-6 min-w-full font-semibold hover:text-gray-500";
      if (props.textWhite)
         className += " text-gray-200";
      else
         className += " text-blue-900";

      return (
         <a href={props.href} className={className}>{props.btnText}</a>
      );
   }
}
export class ButtonBlockLink extends Component {
   render() {
      const p = this.props;
      return (
         <a href={p.href} className="py-1 px-6 min-w-full text-blue-900 text-sm hover:text-gray-500">{p.btnText}</a>
      );
   }
}

export default { ButtonBlock, ButtonBlockText, ButtonBlockLink };
