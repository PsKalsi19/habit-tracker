
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home/Home'
import Archive from './pages/Archive/Archive'
import PrimaryLayout from './layout/PrimaryLayout'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<PrimaryLayout/>}>
          <Route index element={<Home />} />
          <Route path="/archive" element={<Archive />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
