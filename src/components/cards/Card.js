import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';


export class Card extends Component {

   constructor(props) {
      super(props);
      this.state = { showCode: false };
   }

   render() {
      const { title, bgColor, borderColor, customClass, description, imgHeight, src, alt, small, githubBtnUri, squareBtnAct, copyBtnAct, codeBlock, codeLang } = this.props;

      let className = `flex-col justify-start h-full rounded-lg shadow-md ${customClass}`;
      if (small) {
         className += ' max-w-md ';
      }
      if (bgColor) {
         className += ' bg-' + bgColor;
      }

      return (
         <div className={className}>
            <div className="header h-16 p-6 font-semibold">
               {title}
            </div>
            <div className={`image max-h-full p-6 border-t ${borderColor}`}>
               {
                  src ? <div className={imgHeight == null ? 'mx-auto w-full h-32' : 'mx-auto w-full h-' + imgHeight} >
                     <img className="object-cover w-full h-full" src={src} alt={alt} />
                  </div> : null
               }
               {
                  this.props.children
               }
            </div>
            <div className={`descriptions h-auto p-6 border-t ${borderColor}`}>
               <p>{description}</p>
            </div>
            <div className={`footer flex items-center justify-end h-16 p-6 border-t ${borderColor} space-x-8`}>
               <a href={githubBtnUri} target={'blank'} className="fab fa-fw fa-github fa-lg focus:outline-none hover:text-gray-700">{}</a>
               <button onClick={squareBtnAct} className="fa fa-fw fa-vector-square fa-lg focus:outline-none hover:text-gray-700"></button>
               <button onClick={copyBtnAct} className="far fa-fw fa-clone fa-lg focus:outline-none hover:text-gray-700"></button>
               <button onClick={() => this.setState(state => ({ showCode: !state.showCode }))} className="fa fa-fw fa-code fa-lg focus:outline-none hover:text-gray-700"></button>
            </div>
            {
               this.state.showCode ?
                  <div className={`code-block h-auto p-6 border-t rounded-b overflow-hidden ${borderColor}`}>
                     <SyntaxHighlighter
                        language={codeLang}
                        style={atomOneDark}
                        wrapLines={true}
                        className="rounded text-sm"
                     >
                        {/* All code block wil appear in here */}
                        {codeBlock}
                     </SyntaxHighlighter>
                  </div>
                  : ''
            }
         </div>
      );
   }
}

Card.propTypes = {
   title: PropTypes.string,
   imgHeight: PropTypes.string,
   src: PropTypes.string,
   alt: PropTypes.string,
   small: PropTypes.bool,
   squareBtnAct: PropTypes.func,
   copyBtnAct: PropTypes.func,
   codeBlock: PropTypes.any,
   bgColor: PropTypes.string,
   borderColor: PropTypes.string,
   customClass: PropTypes.string,
};

export default Card;
