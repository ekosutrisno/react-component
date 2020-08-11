import React from 'react';
import Header from './components/Header';
import CardMansony from './components/CardMansony';
import './App.css';

function App() {
  return (
    <div className="bg-gray-200 min-h-screen">
      <Header />
      <div className="container mx-auto px-48 mt-4">
        <CardMansony title="CardMansony 01" src="http://lorempixel.com/640/480/business" />
        <div className="flex justify-between items-center pt-4 space-x-3">
          <CardMansony
            title="CardMansony 02"
            src="http://lorempixel.com/640/480/people"
            imgHeight="64" />
          <CardMansony
            title="CardMansony 03"
            src="http://lorempixel.com/640/480/nightlife" />
        </div>
      </div>
    </div>
  );
}

export default App;
