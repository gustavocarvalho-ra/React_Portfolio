import AboutContainer from "./AboutContainer"
import Projetos from "./Projetos"
import TechnologiesContainer from "./TechnologiesContainer"

import "../styles/componentes/maincontent.sass"

const MainContent = () => {
  return <main id="main-content">
    <AboutContainer />
    <TechnologiesContainer />
    <Projetos />
  </main>
}

export default MainContent