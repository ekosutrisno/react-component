import React, { Component } from 'react';
import CardMansony from '../components/cards/CardMansony';

export class CardsView extends Component {
   render() {
      return (
         <div className="container mx-auto my-4">
            <CardMansony title="CardMansony 01" src="https://images.unsplash.com/photo-1480506132288-68f7705954bd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=300" />
            <div className="flex pt-4 flex-wrap lg:space-x-6">
               <CardMansony
                  small
                  title="CardMansony 02"
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                  imgHeight="64" />

               <CardMansony
                  small
                  title="CardMansony 03"
                  src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                  imgHeight="32"
               />
            </div>
         </div>
      );
   }
}

export default CardsView;
