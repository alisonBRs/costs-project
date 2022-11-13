import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import Header from "./components/Layout/Header"

import Home from "./components/Pages/Home"
import Projects from "./components/Pages/Projects"
import Company from "./components/Pages/Company"
import Contact from "./components/Pages/Contact"
import NewProject from "./components/Pages/NewProject"

import Container from "./components/Layout/Container"
import Footer from "./components/Layout/Footer"

import { useState } from "react"
import { Message } from "./components/Layout/Message"

function App() {
  const [showToast, setShowToast] = useState(false)
  return (
    <Router>
      <Header />

      <Container customClass="bg">
        {showToast && (
          <Message
            showToast={showToast}
            setShowToast={setShowToast}
            msg="Projeto criado com sucesso!"
          />
        )}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/company" element={<Company />} />
          <Route path="/contact" element={<Contact />} />
          <Route
            path="/newproject"
            element={<NewProject setShow={setShowToast} />}
          />
        </Routes>
      </Container>

      <Footer />
    </Router>
  )
}

export default App
