import React from 'react';
import Affix from '../../components/navigation/Affix';
import Card from '../../components/cards/Card';

function AffixView() {
   let description = `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis placeat dicta excepturi nihil consectetur maxime quo. Ipsa vitae, ea quod animi dignissimos cupiditate repellendus ducimus libero. Aperiam dignissimos ab laudantium.`;
   let codeBlock1 =
      `import React from 'react';
import Affix from '../../components/navigation/Affix';
function MyComponent {
   return(
      <Affix
         bottom={50}
         right={80}
         bg={'gray-700'}
         bottomRight
         children={"Chat Me?"}
      />
   );
}`;


   return (
      <section className="flex flex-col">
         <div>
            <h1 className="flex items-center text-2xl text-gray-300 lg:pt-12">
               <svg className="w-5 h-5 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M9.243 3.03a1 1 0 01.727 1.213L9.53 6h2.94l.56-2.243a1 1 0 111.94.486L14.53 6H17a1 1 0 110 2h-2.97l-1 4H15a1 1 0 110 2h-2.47l-.56 2.242a1 1 0 11-1.94-.485L10.47 14H7.53l-.56 2.242a1 1 0 11-1.94-.485L5.47 14H3a1 1 0 110-2h2.97l1-4H5a1 1 0 110-2h2.47l.56-2.243a1 1 0 011.213-.727zM9.03 8l-1 4h2.938l1-4H9.031z" clipRule="evenodd" />
               </svg>
               <span>Affix</span>
            </h1>
            <article className="text-gray-300 py-3 space-y-6">

               {/* Content in Here */}
               <Card
                  githubBtnUri="https://github.com/ekosutrisno/react-component/"
                  // squareBtnAct={this.squareAction}
                  // copyBtnAct={this.copyAction}
                  codeBlock={codeBlock1}
                  description={description}
                  borderColor="border-gray-400"
                  content={
                     <Affix
                        bottom={50}
                        right={80}
                        bg={'gray-700'}
                        bottomRight
                        children={"Chat Me?"}
                     />
                  }
                  bgColor="gray-300 text-gray-900"
                  customClass="shadow-2xl"
                  codeLang="javascript"
                  title="Affix"
               />


            </article>

         </div>
      </section>
   );
}

export default AffixView;
