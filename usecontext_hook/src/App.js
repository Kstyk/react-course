import React from 'react'
import './App.css';
import AppProvider from './AppContext';
import UserInfo from './UserInfo';
import Button from './Button'

const App = () => {
  return (
    <>
      <AppProvider>
        <UserInfo />
        <Button />
      </AppProvider>
    </>
  );
}

export default App;