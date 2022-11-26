import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from './components/Home'
import Product from './components/Product'

function App() {
  return (
    <div className="container mx-auto">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<Product />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
