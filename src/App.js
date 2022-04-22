import React from 'react';
import logo from './logo.svg';
import './App.css';
import './style.css'
import ProfilePhoto from './component/profile/ProfilePhoto';
import Adresse from './component/profile/Adresse';
import FullName from './component/profile/FullName';

function App() {
  return (
    <div>
      <ProfilePhoto/>
      <br/>
      <FullName/>
      <br/>
      <Adresse/>
      <br/>
    </div>
  );
}

export default App;
