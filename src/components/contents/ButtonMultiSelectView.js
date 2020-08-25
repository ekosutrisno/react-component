import React, { Component } from 'react';
import ButtonMultiselect from '../buttons/ButtonMultiselect';
import Card from '../cards/Card';

export class ButtonMultiSelectView extends Component {
   render() {
      return (
         <section>
            <h1 className="text-2xl text-gray-300 lg:pt-12">Test 01</h1>
            <article className="text-gray-300 py-3 space-y-6">

               <Card
                  githubBtnUri="https://github.com/ekosutrisno/react-component/"
                  content={<ButtonMultiselect />}
                  bgColor="gray-800"
                  customClass="shadow-2xl"
                  codeLang="javascript"
                  title="Testing ButtonMultiselect"
               />
            </article>
         </section>
      );
   }
}

export default ButtonMultiSelectView;
