import React, { Component } from 'react';
import ButtonPrimary from '../components/buttons/ButtonPrimary';
import ButtonPrimaryShadow from '../components/buttons/ButtonPrimaryShadow';
import ButtonDefault from '../components/buttons/ButtonDefault';
import ButtonDefaultShadow from '../components/buttons/ButtonDefaultShadow';

export class ButtonsView extends Component {
   render() {
      return (
         <div className="container mx-auto px-4 md:px-48 mt-4 space-x-3">
            <ButtonPrimary btnText="Primary Button 1" />
            <ButtonPrimaryShadow btnText="Primary Button 2" />
            <ButtonDefault btnText="Default Button 1" />
            <ButtonDefaultShadow btnText="Default Button 2" />
         </div>
      );
   }
}

export default ButtonsView;
