import React, { Component } from 'react';
import Card from '../cards/Card';
import Test from '../cards/Test';

export class ButtonContentView extends Component {
   onClickTestEvent() {
      console.log("Testing Event Click Button");
   }
   onHoverTestEvent() {
      console.log("Testing Event Hover Button");
   }
   onFocusTestEvent() {
      console.log("Testing Event Focus Button");
   }
   render() {
      let codeBlock =
         `constructor(props) {
   super(props);
   this.state = { showCode: true };
   this.handleToggleClick = this.handleToggleClick.bind(this);
 }`;
      let codeBlock1 =
         `import React, { Component } from 'react';
import Card from '../cards/Card';
export class MainFragment extends Component {
   render() {
      return(
         <Card
            githubBtnUri="https://github.com/ekosutrisno/react-component/"
            squareBtnAct={this.squareAction}
            copyBtnAct={this.copyAction}
            codeBlock={codeBlock}
            description={description}
            borderColor="border-gray-400"
            bgColor="gray-300"
            customClass="text-gray-900"
            codeLang="javascript"
            title="Card Title 01"
            src="https://images.unsplash.com/photo-1480506132288-68f7705954bd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=300" 
         />
      );
   }
}`;

      let description = "React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.";


      return (
         <section>
            <h1 className="text-2xl flex items-center text-gray-300 lg:pt-12">
               <svg className="w-5 h-5 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M9.243 3.03a1 1 0 01.727 1.213L9.53 6h2.94l.56-2.243a1 1 0 111.94.486L14.53 6H17a1 1 0 110 2h-2.97l-1 4H15a1 1 0 110 2h-2.47l-.56 2.242a1 1 0 11-1.94-.485L10.47 14H7.53l-.56 2.242a1 1 0 11-1.94-.485L5.47 14H3a1 1 0 110-2h2.97l1-4H5a1 1 0 110-2h2.47l.56-2.243a1 1 0 011.213-.727zM9.03 8l-1 4h2.938l1-4H9.031z" clipRule="evenodd" />
               </svg>
               <span>Button Example View</span>
            </h1>
            <article className="py-3 space-y-6">
               <Card
                  githubBtnUri="https://github.com/ekosutrisno/react-component/"
                  squareBtnAct={this.squareAction}
                  copyBtnAct={this.copyAction}
                  codeBlock={codeBlock1}
                  description={description}
                  borderColor="border-gray-400"
                  bgColor="pink-300"
                  codeLang="javascript"
                  title="Card Title 01"
                  src="https://images.unsplash.com/photo-1480506132288-68f7705954bd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=300"
               />
               <Card
                  githubBtnUri="https://github.com/ekosutrisno/react-component/"
                  squareBtnAct={this.squareAction}
                  copyBtnAct={this.copyAction}
                  codeBlock={codeBlock}
                  description={description}
                  borderColor="border-gray-400"
                  bgColor="gray-300"
                  customClass="shadow-2xl"
                  codeLang="javascript"
                  title="Card Title 01"
               >
                  <Test />
               </Card>
            </article>
         </section>
      );
   }
}

export default ButtonContentView;
