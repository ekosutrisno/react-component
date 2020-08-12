import React, { Component } from 'react';

export class ButtonText extends Component {
   render() {
      const p = this.props;
      return (
         <a href={p.href} className="py-1 px-6 text-blue-900 font-semibold hover:text-gray-500">{p.btnText}</a>
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
