import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home/Home'
import Reserve from './components/Reserve/Reserve'
import Header from './components/Header/Header'
import Menu from './components/Menu/Menu'

function App() {
  return (
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/menu' element={<Menu />}/>
          <Route path='/reserve' element={<Reserve />}/>
        </Routes>
      </BrowserRouter>
  )
}

export default App
