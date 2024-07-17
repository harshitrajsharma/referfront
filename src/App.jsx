
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Refer from './components/pages/refer'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Refer />} />
      </Routes>
    </>
  )
}

export default App
