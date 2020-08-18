import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class ButtonDefault extends Component {
   render() {
      const { border, shadow, btnText, onClick, onHover, onFocus } = this.props;
      let className = "btn-default focus:outline-none hover:bg-gray-300 hover:text-blue-900 hover:shadow-sm transition-all duration-200 ease-in-out focus:bg-gray-200 focus:text-blue-900";
      if (border) {
         className += ' border border-blue-900';
      }
      if (shadow) {
         className += ' shadow-md';
      }
      return (
         <button
            onClick={onClick}
            onTouchMove={onHover}
            onFocus={onFocus}
            className={className}>
            {btnText}
         </button>
      );
   }
}
export class ButtonPrimary extends Component {
   render() {
      const { shadow, btnText, onClick, onHover, onFocus } = this.props;
      let className = "btn-primary focus:outline-none hover:bg-gray-300 hover:text-blue-900 hover:shadow-sm transition-all duration-200 ease-in-out focus:bg-gray-200 focus:text-blue-900";
      if (shadow)
         className += ' shadow-md';

      return (
         <button
            onClick={onClick}
            onTouchMove={onHover}
            onFocus={onFocus}
            className={className}>
            {btnText}
         </button>
      );
   }
}

export class ButtonLink extends Component {
   render() {
      const { href, btnText } = this.props;
      return (
         <a href={href} className="py-1 px-6 text-blue-900 text-sm hover:text-gray-500">{btnText}</a>
      );
   }
}

export class ButtonText extends Component {
   render() {
      const { textWhite, href, btnText } = this.props;
      let className = "py-1 px-6 font-semibold hover:text-gray-500";
      if (textWhite)
         className += " text-gray-200";
      else
         className += " text-blue-900";

      return (
         <a href={href} className={className}>{btnText}</a>
      );
   }
}

// All props type and check
ButtonDefault.propTypes = {
   btnText: PropTypes.string,
   border: PropTypes.bool,
   shadow: PropTypes.bool,
   onClick: PropTypes.func,
   onHover: PropTypes.func,
   onFocus: PropTypes.func,
};
ButtonPrimary.propTypes = {
   btnText: PropTypes.string,
   shadow: PropTypes.bool,
   onClick: PropTypes.func,
   onHover: PropTypes.func,
   onFocus: PropTypes.func,
};
ButtonLink.propTypes = {
   btnText: PropTypes.string,
   href: PropTypes.string,
};
ButtonText.propTypes = {
   btnText: PropTypes.string,
   href: PropTypes.string,
   textWhite: PropTypes.bool
};

export default {
   ButtonDefault,
   ButtonPrimary,
   ButtonText,
   ButtonLink
};
