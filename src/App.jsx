
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './components/home'
import About from './components/about'
import Contact from './components/contact'
import WhatsAppFloat from './components/WhatsAppFloat'


function App() {

  return (
    <>
    <div>
     <BrowserRouter>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contacts' element={<Contact/>}/>
     </Routes>
     <WhatsAppFloat/>
     
     </BrowserRouter>
     
      </div>   
    </>
  )
}

export default App
