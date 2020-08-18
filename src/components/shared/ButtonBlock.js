import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class ButtonBlock extends Component {
   render() {
      const { shadow, primary, btnText, onClick, onHover, onFocus } = this.props;
      let className = "min-w-full focus:outline-none hover:bg-gray-300 hover:text-blue-900 hover:shadow-sm transition-all duration-200 ease-in-out focus:bg-gray-200 focus:text-blue-900";

      if (shadow)
         className += ' shadow-md';

      if (primary) {
         className += ' btn-primary';
      } else {
         className += ' btn-default ';
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
};
export class ButtonBlockText extends Component {
   render() {
      const { textWhite, href, btnText } = this.props;
      let className = "py-1 px-6 min-w-full font-semibold hover:text-gray-500";
      if (textWhite)
         className += " text-gray-200";
      else
         className += " text-blue-900";

      return (
         <a href={href} className={className}>{btnText}</a>
      );
   }
}
export class ButtonBlockLink extends Component {
   render() {
      const { href, btnText } = this.props;
      return (
         <a href={href} className="py-1 px-6 min-w-full text-blue-900 text-sm hover:text-gray-500">{btnText}</a>
      );
   }
}

// All props type and check
ButtonBlock.propTypes = {
   shadow: PropTypes.bool,
   primary: PropTypes.bool,
   btnText: PropTypes.string,
   onClick: PropTypes.func,
   onHover: PropTypes.func,
   onFocus: PropTypes.func
};
ButtonBlockText.propTypes = {
   textWhite: PropTypes.bool,
   href: PropTypes.string,
   btnText: PropTypes.string
};
ButtonBlockLink.propTypes = {
   href: PropTypes.string,
   btnText: PropTypes.string
};

export default { ButtonBlock, ButtonBlockText, ButtonBlockLink };
