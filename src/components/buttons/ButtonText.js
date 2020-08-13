import React, { Component } from 'react';

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

export class ButtonLink extends Component {
   render() {
      const p = this.props;
      return (
         <a href={p.href} className="py-1 px-6 text-blue-900 text-sm hover:text-gray-500">{p.btnText}</a>
      );
   }
}

export default { ButtonText, ButtonLink };
