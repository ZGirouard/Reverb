import Product from './components/Product/Product'

function App() {
  return (
    <main>
      <h1>Reverb</h1>
      <Product
        imageSrc="https://via.placeholder.com/150"
        imageAlt="Product Image"
        reverbBump="Reverb Bump"
        description="Item Label"
        quality="Brand New"
        price="$100"
        showFreeShipping={true}
        showReturnPolicy={true}
      />
    </main>
  )
}

export default App
