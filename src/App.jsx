import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import LanguageSelector from './components/LanguageSelector'
import { LanguageContextProvider } from './LanguageContext'
import Content from './components/Content'

function App() {

  return (
    <LanguageContextProvider>
      <Header />
      <Content />
      <LanguageSelector />
    </LanguageContextProvider>
      
    
  )
}

export default App
