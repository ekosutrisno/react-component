import React, { Component } from 'react';
import CardMansony from '../components/CardMansony';

export class CardsView extends Component {
   render() {
      return (
         <div className="container mx-auto px-4 md:px-48 mt-4">
            <CardMansony title="CardMansony 01" src="http://lorempixel.com/640/480/business" />
            <div className="flex flex-col space-y-3 pt-4 md:space-y-0 md:flex-row md:space-x-3">
               <CardMansony
                  title="CardMansony 02"
                  src="http://lorempixel.com/640/480/people"
                  imgHeight="64" />

               <CardMansony
                  title="CardMansony 03"
                  src="http://lorempixel.com/640/480/nightlife"
                  imgHeight="32"
               />

            </div>
         </div>
      );
   }
}

export default CardsView;
