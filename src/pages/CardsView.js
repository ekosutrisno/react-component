import React, { Component } from 'react';
import Card from '../components/cards/Card';

export class CardsView extends Component {

   squareAction() {
      console.log("Event squareBtnAct");
   }
   copyAction() {
      console.log("Event copyBtnAct");
   }


   render() {
      let codeBlock =
         `constructor(props) {
   super(props);
   this.state = { showCode: true };
   this.handleToggleClick = this.handleToggleClick.bind(this);
 }`;

      let description = "React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.";


      return (
         <div className="container mx-auto px-4 my-4">
            <Card
               githubBtnUri="https://github.com/ekosutrisno/react-component/"
               squareBtnAct={this.squareAction}
               copyBtnAct={this.copyAction}
               codeBlock={codeBlock}
               description={description}
               codeLang="javascript"
               title="Card Title 01"
               src="https://images.unsplash.com/photo-1480506132288-68f7705954bd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=300" />

            <div className="flex pt-4 flex-wrap lg:space-x-6">
               <Card
                  githubBtnUri="https://github.com/ekosutrisno/react-component/"
                  squareBtnAct={this.squareAction}
                  copyBtnAct={this.copyAction}
                  small
                  codeBlock={codeBlock}
                  description={description}
                  codeLang="javascript"
                  title="Card Title 02"
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                  imgHeight="64" />

               <Card
                  githubBtnUri="https://github.com/ekosutrisno/react-component/"
                  squareBtnAct={this.squareAction}
                  copyBtnAct={this.copyAction}
                  small
                  codeBlock={codeBlock}
                  description={description}
                  codeLang="javascript"
                  title="Card Title 03"
                  src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                  imgHeight="32"
               />
            </div>
         </div>
      );
   }
}

export default CardsView;
