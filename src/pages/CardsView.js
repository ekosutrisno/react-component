import React, { Component } from 'react';
import CardMansony from '../components/cards/CardMansony';

export class CardsView extends Component {
   render() {
      return (
         <div className="container mx-auto px-4 md:px-48 my-4">
            <CardMansony title="CardMansony 01" src="http://lorempixel.com/640/480/business" />
            <div className="flex pt-4 flex-wrap">
               <CardMansony
                  small
                  title="CardMansony 02"
                  src="http://lorempixel.com/640/480/people"
                  imgHeight="64" />

               <CardMansony
                  small
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
