import "./App.css"
import Calculator from "./features/calculator/calculator"

function App() {
  return (
    <div className="App">
      <header></header>
      <main>
        <section className="calculator-section">
          <Calculator />
        </section>
      </main>
      <footer></footer>
    </div>
  )
}

export default App
