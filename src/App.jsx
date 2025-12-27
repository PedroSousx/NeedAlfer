import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar"
import Header from "./components/Header" 
import About from "./components/About"
import Cardapio from "./components/Cardapio"
import Location from "./components/Location"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import MenuPage from "./pages/MenuPage"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <>
            <Navbar />
            <Header />
            <About />
            <Cardapio />
            <Location />
            <Contact />
            <Footer />
          </>
        } />

        <Route path="/cardapio" element={
          <>
            <MenuPage />
          </>
        } />
      </Routes>
    </Router>
  )
}

export default App
