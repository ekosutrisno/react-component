import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class ButtonIcon extends Component {
   render() {
      const { defaultIcon, primary, border, icon, btnText, onClick, onHover, onFocus } = this.props;
      let className = "focus:outline-none hover:bg-gray-300 hover:text-blue-900 hover:shadow-sm transition-all duration-200 ease-in-out focus:bg-gray-200 focus:text-blue-900";
      if (primary) {
         className += ' py-1 px-6 rounded-lg font-semibold bg-blue-900 text-gray-200';
      } else if (defaultIcon) {
         className += ' py-1 px-6 rounded-lg font-semibold bg-white text-blue-900 shadow-md';
      } else {
         className = ' py-2 px-6 text-blue-900 hover:text-blue-700 focus:outline-none';
      }

      if (border) {
         className += ' border border-blue-900';
      }

      return (
         <button
            onClick={onClick}
            onTouchMove={onHover}
            onFocus={onFocus}
            className={className}
         >
            <span className={icon}></span>
            <span className="ml-2">{btnText}</span>
         </button>
      );
   }
}

export class ButtonIconCircle extends Component {
   render() {
      const { primary, shadow, border, icon, btnText, onClick, onHover, onFocus } = this.props;
      let className = 'w-8 h-8 rounded-full focus:outline-none hover:bg-gray-300 hover:text-blue-900 hover:shadow-sm transition-all duration-200 ease-in-out focus:bg-gray-200 focus:text-blue-900';
      if (primary) {
         className += ' bg-blue-900 text-white';
      }
      if (shadow) {
         className += ' shadow-md';
      }

      if (border) {
         className += ' border border-blue-900';
      }

      return (
         <button
            className={className}
            onClick={onClick}
            onTouchMove={onHover}
            onFocus={onFocus}
         >
            <span className={icon}>{btnText}</span>
         </button>
      );
   }
}

// All prosp type and check
ButtonIcon.propTypes = {
   defaultIcon: PropTypes.bool,
   primary: PropTypes.bool,
   border: PropTypes.bool,
   icon: PropTypes.string,
   btnText: PropTypes.string,
   onClick: PropTypes.func,
   onHover: PropTypes.func,
   onFocus: PropTypes.func,
};
ButtonIcon.propTypes = {
   shadow: PropTypes.bool,
   primary: PropTypes.bool,
   border: PropTypes.bool,
   icon: PropTypes.string,
   btnText: PropTypes.string,
   onClick: PropTypes.func,
   onHover: PropTypes.func,
   onFocus: PropTypes.func,
};

export default {
   ButtonIcon,
   ButtonIconCircle
};
