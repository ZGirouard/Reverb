import Product from './components/Product/Product'
import Button from './components/Button/Button'
import SearchBox from './components/SearchBox/SearchBox'

function App() {
  return (
    <main>
      <h1>Reverb</h1>
      <SearchBox placeholder="Search gear, brands, and more" />
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
      <Button>Button</Button>
    </main>
  )
}

export default App
