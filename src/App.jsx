import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import SignInAndSignUp from './Pages/SignInAndSignUp'
import Dashboard from './Pages/Dashboard'

function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<SignInAndSignUp/>} />
      <Route path='/private' element={<Dashboard/>} />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
