import MainContent from "./components/MainContent"
import Sidebar from "./components/Sidebar"

import "./styles/componentes/app.sass"

function App() {
  return (
    <div id="portfolio">
      <h1>Gustavo Carvalho</h1>
      <Sidebar />
      <MainContent />
    </div>
  )
}

export default App
