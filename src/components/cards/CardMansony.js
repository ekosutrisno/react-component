import React, { Component } from 'react';


export class CardMansony extends Component {

   render() {
      return (
         <div className="flex-col justify-start h-full bg-white rounded-lg shadow-md">
            <div className="header h-16 p-6 font-semibold">
               {this.props.title}
            </div>
            <div className="image max-h-full p-6 border-t border-gray-300">
               <div className={this.props.imgHeight == null ? 'mx-auto w-full h-32' : 'mx-auto w-full h-' + this.props.imgHeight} >
                  <img className="object-cover w-full h-full" src={this.props.src} alt={this.props.alt} />
               </div>
            </div>
            <div className="descriptions h-auto p-6 border-t border-gray-300">
               <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab ullam dolorum eum rem,
               dicta dignissimos id, eaque sint dolore sed maiores itaque ducimus qui,
               velit unde quo nobis libero a.</p>
            </div>
            <div className="footer flex items-center justify-end h-16 p-6 border-t border-gray-300 space-x-4">
               <button className="fab fa-fw fa-github fa-lg focus:outline-none hover:text-gray-700"></button>
               <button className="fa fa-fw fa-vector-square fa-lg focus:outline-none hover:text-gray-700"></button>
               <button className="far fa-fw fa-clone fa-lg focus:outline-none hover:text-gray-700"></button>
               <button className="fa fa-fw fa-code fa-lg focus:outline-none hover:text-gray-700"></button>
            </div>
         </div>
      );
   }
}

export default CardMansony;
