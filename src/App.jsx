import { useState } from 'react';
import './App.css'
import { Layout } from './Layout/Layout';

function App() {


  const loader = () =>{
    return(
      <>
      <Layout />
      </>
    )
  }


  return (
    <>
      {loader()}
    </>
  )
}

export default App
