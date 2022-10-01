import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import Header from "./components/Layout/Header"

import Home from "./components/Pages/Home"
import Projects from "./components/Pages/Projects"
import Company from "./components/Pages/Company"
import Contact from "./components/Pages/Contact"
import NewProject from "./components/Pages/NewProject"

import Container from "./components/Layout/Container"
import Footer from "./components/Layout/Footer"

function App() {
  return (
    <Router>
      <Header />

      <Container colorBlue="bg">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Projects" element={<Projects />} />
          <Route path="/Company" element={<Company />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/NewProject" element={<NewProject />} />
        </Routes>
      </Container>

      <Footer />
    </Router>
  )
}

export default App
