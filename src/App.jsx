import './App.css'
import Navbar from './components/Navbar'
import { CountriesProvider } from './context/CountriesContext'
import Country from './pages/Country';
import Home from './pages/Home'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
function App() {
  return (
    <>
    <Router>
    <CountriesProvider>
          <Navbar />
          <Routes>
            <Route index element={<Home />} />
            <Route path="/country/:cca3" element={<Country />} />
          </Routes>
      </CountriesProvider>
    </Router>
    </>
  )
}

export default App
