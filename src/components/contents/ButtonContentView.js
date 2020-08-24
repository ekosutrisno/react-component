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
            bgColor="gray-800"
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
            <h1 className="text-2xl text-gray-300 lg:pt-12">Installation</h1>
            {/* Nanti kontent akan dinamic */}
            <article className="text-gray-300 py-3 space-y-6">
               <Card
                  githubBtnUri="https://github.com/ekosutrisno/react-component/"
                  squareBtnAct={this.squareAction}
                  copyBtnAct={this.copyAction}
                  codeBlock={codeBlock1}
                  description={description}
                  bgColor="gray-800"
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
                  content={<Test />}
                  bgColor="gray-800"
                  customClass="shadow-2xl"
                  codeLang="javascript"
                  title="Card Title 01"
               />
            </article>
         </section>
      );
   }
}

export default ButtonContentView;
