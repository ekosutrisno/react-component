import React, { Component } from 'react';
import { ButtonLoading, ButtonLoadingCircle } from '../buttons/LoadingButton';
import Card from '../cards/Card';

export class ButtonMultiSelectView extends Component {
   constructor(props) {
      super(props);
      this.state = { isLoading: false };
   }
   render() {
      return (
         <section className="flex flex-col">
            <div>
               <h1 className="flex items-center text-2xl text-gray-300 lg:pt-12">
                  <svg className="w-5 h-5 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                     <path fillRule="evenodd" d="M9.243 3.03a1 1 0 01.727 1.213L9.53 6h2.94l.56-2.243a1 1 0 111.94.486L14.53 6H17a1 1 0 110 2h-2.97l-1 4H15a1 1 0 110 2h-2.47l-.56 2.242a1 1 0 11-1.94-.485L10.47 14H7.53l-.56 2.242a1 1 0 11-1.94-.485L5.47 14H3a1 1 0 110-2h2.97l1-4H5a1 1 0 110-2h2.47l.56-2.243a1 1 0 011.213-.727zM9.03 8l-1 4h2.938l1-4H9.031z" clipRule="evenodd" />
                  </svg>
                  <span>Button ButtonLoading</span>
               </h1>
               <article className="text-gray-300 py-3 space-y-6">

                  <Card
                     githubBtnUri="https://github.com/ekosutrisno/react-component/"
                     content={
                        <ButtonLoading btnText="ekosutrisno" onClick={() => { this.setState({ isLoading: !this.state.isLoading }); }} primary icon="fa fa-fw fa-spinner" isLoading={this.state.isLoading} />
                     }
                     bgColor="gray-800"
                     customClass="shadow-2xl"
                     codeLang="javascript"
                     title="Testing ButtonLoading"
                  />
               </article>
            </div>
         </section>
      );
   }
}

export default ButtonMultiSelectView;
