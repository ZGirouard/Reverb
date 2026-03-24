import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pageComponents/Home'
import Products from './pageComponents/Products'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </BrowserRouter>
  )
}
