import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'  
import './App.css'
import { Header } from './sections/index'
import {Home, Engineering} from './pages/index'

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/engineering' element={<Engineering />} />
        </Routes>
      </Router>  
    </>
  )
}

export default App
