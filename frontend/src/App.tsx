import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Contact from './pages/Contact'
import RoutesPage from './pages/RoutesPage'
import Footer from './components/Footer'
import ScrollToHash from './components/ScrollToHash'

function App() {
    return (
        <BrowserRouter>
            <ScrollToHash />
            <Navbar />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/trasy" element={<RoutesPage />} />
                <Route path="/kontakt" element={<Contact />} />
            </Routes>

            <Footer />
        </BrowserRouter>
    )
}

export default App