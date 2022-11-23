import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './components/Home'
import Product from './components/Product'

function App() {
  return (
    <div className="container mx-auto">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<Product />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
