import React, { Component } from 'react';
import { ButtonDefault, ButtonPrimary, ButtonLink, ButtonText } from '../components/shared/Button';
import { ButtonIcon, ButtonIconCircle } from '../components/shared/ButtonIcon';
import { ButtonBlock, ButtonBlockText, ButtonBlockLink } from '../components/shared/ButtonBlock';

export class ButtonsView extends Component {
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
      return (
         <div className="mx-auto box-border items-center justify-between flex flex-wrap container py-5 space-y-2">
            {/* Card 01 */}
            <div className="flex-col justify-start h-full w-70 bg-white rounded-lg shadow-md">
               <div className="header h-16 p-6 font-semibold">
                  Type
               </div>
               <div className="image max-h-full p-6 border-t border-gray-300">
                  <div className="flex flex-wrap justify-evenly items-center">
                     <div className="py-3">
                        <ButtonPrimary
                           onClick={this.onClickTestEvent}
                           onHover={this.onHoverTestEvent}
                           onFocus={this.onFocusTestEvent}
                           btnText="Primary Button 1" />
                     </div>
                     <div className="py-3">
                        <ButtonPrimary
                           shadow
                           btnText="Primary Button 2"
                           onClick={this.onClickTestEvent}
                           onHover={this.onHoverTestEvent}
                           onFocus={this.onFocusTestEvent}
                        />
                     </div>
                     <div className="py-3">
                        <ButtonDefault
                           border
                           btnText="Default Button 1"
                           onClick={this.onClickTestEvent}
                           onHover={this.onHoverTestEvent}
                           onFocus={this.onFocusTestEvent}
                        />
                     </div>
                     <div className="py-3">
                        <ButtonDefault
                           shadow
                           btnText="Default Button 2"
                           onClick={this.onClickTestEvent}
                           onHover={this.onHoverTestEvent}
                           onFocus={this.onFocusTestEvent}
                        />
                     </div>
                     <div className="py-3">
                        <ButtonText btnText="Text Button" href="/cardview" />
                     </div>
                     <div className="py-3">
                        <ButtonLink btnText="Link Button" href="/" />
                     </div>
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
            {/* Card 02 */}
            <div className="flex-col justify-start h-full w-70 bg-white rounded-lg shadow-md">
               <div className="header h-16 p-6 font-semibold">
                  Icon
               </div>
               <div className="image max-h-full p-6 border-t border-gray-300">
                  <div className="flex flex-wrap justify-evenly items-center">
                     <div className="py-3">
                        <ButtonIcon onClick={this.onClickTestEvent} primary btnText="Search" icon="fa fa-fw fa-search" />
                     </div>
                     <div className="py-3">
                        <ButtonIcon onClick={this.onClickTestEvent} btnText="Search" defaultIcon icon="fa fa-fw fa-search" />
                     </div>
                     <div className="py-3">
                        <ButtonIcon onClick={this.onClickTestEvent} border defaultIcon btnText="Search" icon="fa fa-fw fa-search" />
                     </div>
                     <div className="py-3">
                        <ButtonIcon onClick={this.onClickTestEvent} btnText="Search" icon="fa fa-fw fa-search" />
                     </div>
                     <div className="py-3">
                        <ButtonIconCircle onClick={this.onClickTestEvent} icon="fa fa-fw fa-save text-blue-900" />
                     </div>
                     <div className="py-3">
                        <ButtonIconCircle onClick={this.onClickTestEvent} primary icon="fa fa-fw fa-search" />
                     </div>
                     <div className="py-3">
                        <ButtonIconCircle onClick={this.onClickTestEvent} primary btnText="M" />
                     </div>
                     <div className="py-3">
                        <ButtonIconCircle onClick={this.onClickTestEvent} shadow icon="fa fa-fw fa-search" />
                     </div>
                     <div className="py-3">
                        <ButtonIconCircle onClick={this.onClickTestEvent} border icon="fa fa-fw fa-search" />
                     </div>
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
            {/* Card 03 */}
            <div className="flex-col justify-start h-full w-70 bg-white rounded-lg shadow-md">
               <div className="header h-16 p-6 font-semibold">
                  Ghost Button
               </div>
               <div className="image max-h-full p-6 border-t border-gray-300">
                  <div className="flex flex-wrap justify-evenly items-center">
                     <div className="flex items-center justify-center p-5 rounded-lg bg-gray-900 w-full">
                        <div className="py-3">
                           <ButtonDefault btnText="Default" />
                        </div>
                        <div className="py-3">
                           <ButtonText textWhite btnText="Text Button" href="/" />
                        </div>
                     </div>
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
            {/* Card 04 */}
            <div className="flex-col justify-start h-full w-70 bg-white rounded-lg shadow-md">
               <div className="header h-16 p-6 font-semibold">
                  Block Button
               </div>
               <div className="image max-h-full p-6 border-t border-gray-300">
                  <div className="flex flex-wrap justify-evenly items-center">
                     <div className="py-3 w-full">
                        <ButtonBlock primary btnText="Primary Button 2" />
                     </div>
                     <div className="py-3 w-full">
                        <ButtonBlock shadow btnText="Primary Button 2" />
                     </div>
                     <div className="py-3 w-full">
                        <ButtonBlockText href="" btnText="Primary Button 2" />
                     </div>
                     <div className="py-3 w-full">
                        <ButtonBlockLink href="" btnText="Primary Button 2" />
                     </div>
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
            {/* Card 05 */}
            <div className="flex-col justify-start h-full w-70 bg-white rounded-lg shadow-md">
               <div className="header h-16 p-6 font-semibold">
                  Mulitple Button
               </div>
               <div className="image max-h-full p-6 border-t border-gray-300">
                  <div className="flex flex-wrap justify-evenly items-center">
                     <div className="py-3 w-full">
                        {/* <ButtonBlock primary btnText="Primary Button 2" /> */}
                        For Mulitple Button Section
                     </div>
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
            {/* Card 06 */}
            <div className="flex-col justify-start h-full w-70 bg-white rounded-lg shadow-md">
               <div className="header h-16 p-6 font-semibold">
                  Loading Button
               </div>
               <div className="image max-h-full p-6 border-t border-gray-300">
                  <div className="flex flex-wrap justify-evenly items-center">
                     <div className="py-3 w-full">
                        {/* <ButtonBlock primary btnText="Primary Button 2" /> */}
                        For Loading Button
                     </div>
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

         </div>
      );
   }
}

export default ButtonsView;
