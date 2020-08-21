import React from 'react';
// import Header from '../components/shared/Header';
import HeaderFragment from '../components/layouts/HeaderFragment';
import FooterFragment from '../components/layouts/FooterFragment';
import MainFragment from '../components/layouts/MainFragment';
import './App.css';

function App() {
  return (
    <div className="min-h-screen bg-gray-900">
      <HeaderFragment />
      <MainFragment />
      <FooterFragment />
    </div>
  );
}

export default App;
