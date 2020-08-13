import React, { Component } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';


export class CardMansony extends Component {

   constructor(props) {
      super(props);
      this.state = { showCode: false };
      this.handleToggleClick = this.handleToggleClick.bind(this);
   }

   handleToggleClick() {
      this.setState(state => ({
         showCode: !state.showCode
      }));
   }


   render() {
      const { title, imgHeight, src, alt, small } = this.props;
      let className = "flex-col justify-start h-full bg-white rounded-lg shadow-md";
      if (small)
         className += ' max-w-md ';

      return (
         <div className={className}>
            <div className="header h-16 p-6 font-semibold">
               {title}
            </div>
            <div className="image max-h-full p-6 border-t border-gray-300">
               <div className={imgHeight == null ? 'mx-auto w-full h-32' : 'mx-auto w-full h-' + imgHeight} >
                  <img className="object-cover w-full h-full" src={src} alt={alt} />
               </div>
            </div>
            <div className="descriptions h-auto p-6 border-t border-gray-300">
               <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab ullam dolorum eum rem,
               dicta dignissimos id, eaque sint dolore sed maiores itaque ducimus qui,
               velit unde quo nobis libero a.</p>
            </div>
            <div className="footer flex items-center justify-end h-16 p-6 border-t border-gray-300 space-x-8">
               <button onClick={this.handleToggleClick} className="fab fa-fw fa-github fa-lg focus:outline-none hover:text-gray-700"></button>
               <button onClick={this.handleToggleClick} className="fa fa-fw fa-vector-square fa-lg focus:outline-none hover:text-gray-700"></button>
               <button onClick={this.handleToggleClick} className="far fa-fw fa-clone fa-lg focus:outline-none hover:text-gray-700"></button>
               <button onClick={this.handleToggleClick} className="fa fa-fw fa-code fa-lg focus:outline-none hover:text-gray-700"></button>
            </div>
            {
               this.state.showCode ?
                  <div className="descriptions h-auto p-6 border-t border-gray-300">
                     <SyntaxHighlighter
                        language="javascript"
                        style={docco}
                        wrapLines={true}
                     >
                        {`
                        constructor(props) {
                           super(props);
                           this.state = { showCode: true };
                           this.handleToggleClick = this.handleToggleClick.bind(this);
                        }
                     `}
                     </SyntaxHighlighter>
                  </div>
                  : ''
            }
         </div>
      );
   }
}

export default CardMansony;
