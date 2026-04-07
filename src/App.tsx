import Banner from './components/Banner'
import Header from './components/Header'
import { GlobalCss } from './styles'

function App() {
  return (
    <>
      <GlobalCss />
      <div className="container">
        <Header />
        <Banner />
      </div>
    </>
  )
}

export default App
