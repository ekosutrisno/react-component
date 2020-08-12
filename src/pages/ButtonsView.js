import React, { Component } from 'react';
import {
   ButtonDefault,
   ButtonDefaultShadow,
   ButtonPrimary,
   ButtonPrimaryShadow,
   ButtonLink,
   ButtonText
} from '../components/shared/Button';

import ButtonIcon from '../components/buttons/ButtonIcon';
import ButtonIconShadow from '../components/buttons/ButtonIconShadow';
import ButtonIconCircle from '../components/buttons/ButtonIconCircle';

export class ButtonsView extends Component {
   render() {
      return (
         <div class="mx-auto box-border items-center justify-between flex flex-wrap container py-5">
            {/* Card 01 */}
            <div className="flex-col justify-start h-full w-1/3 bg-white rounded-lg shadow-md">
               <div className="header h-16 p-6 font-semibold">
                  Type
               </div>
               <div className="image max-h-full p-6 border-t border-gray-300">
                  <div className="flex flex-wrap justify-evenly items-center">
                     <div className="py-3">
                        <ButtonPrimary btnText="Primary Button 1" />
                     </div>
                     <div className="py-3">
                        <ButtonPrimaryShadow btnText="Primary Button 2" />
                     </div>
                     <div className="py-3">
                        <ButtonDefault btnText="Default Button 1" />
                     </div>
                     <div className="py-3">
                        <ButtonDefaultShadow btnText="Default Button 2" />
                     </div>
                     <div className="py-3">
                        <ButtonText btnText="Text Button" href="/" />
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
            <div className="flex-col justify-start h-full w-1/3 bg-white rounded-lg shadow-md">
               <div className="header h-16 p-6 font-semibold">
                  Icon
               </div>
               <div className="image max-h-full p-6 border-t border-gray-300">
                  <div className="flex flex-wrap justify-evenly items-center">
                     <div className="py-3">
                        <ButtonIcon primary btnText="Search" icon="fa fa-fw fa-search" />
                     </div>
                     <div className="py-3">
                        <ButtonIcon btnText="Search" default icon="fa fa-fw fa-search" />
                     </div>
                     <div className="py-3">
                        <ButtonIcon border default btnText="Search" icon="fa fa-fw fa-search" />
                     </div>
                     <div className="py-3">
                        <ButtonIcon btnText="Search" icon="fa fa-fw fa-search" />
                     </div>
                     <div className="py-3">
                        <ButtonIconCircle icon="fa fa-fw fa-save" />
                     </div>
                     <div className="py-3">
                        <ButtonIconCircle primary icon="fa fa-fw fa-search" />
                     </div>
                     <div className="py-3">
                        <ButtonIconCircle primary btnText="M" />
                     </div>
                     <div className="py-3">
                        <ButtonIconCircle shadow icon="fa fa-fw fa-search" />
                     </div>
                     <div className="py-3">
                        <ButtonIconCircle border icon="fa fa-fw fa-search" />
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
            <div className="flex-col hidden justify-start h-full w-1/3 bg-white rounded-lg shadow-md">
               <div className="header h-16 p-6 font-semibold">
                  Type
               </div>
               <div className="image max-h-full p-6 border-t border-gray-300">
                  <div className="flex flex-wrap justify-evenly items-center">
                     <div className="py-3">
                        <ButtonPrimary btnText="Primary Button 1" />
                     </div>
                     <div className="py-3">
                        <ButtonPrimaryShadow btnText="Primary Button 2" />
                     </div>
                     <div className="py-3">
                        <ButtonDefault btnText="Default Button 1" />
                     </div>
                     <div className="py-3">
                        <ButtonDefaultShadow btnText="Default Button 2" />
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
            <div className="flex-col hidden justify-start h-full w-1/3 bg-white rounded-lg shadow-md">
               <div className="header h-16 p-6 font-semibold">
                  Type
               </div>
               <div className="image max-h-full p-6 border-t border-gray-300">
                  <div className="flex flex-wrap justify-evenly items-center">
                     <div className="py-3">
                        <ButtonPrimary btnText="Primary Button 1" />
                     </div>
                     <div className="py-3">
                        <ButtonPrimaryShadow btnText="Primary Button 2" />
                     </div>
                     <div className="py-3">
                        <ButtonDefault btnText="Default Button 1" />
                     </div>
                     <div className="py-3">
                        <ButtonDefaultShadow btnText="Default Button 2" />
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
