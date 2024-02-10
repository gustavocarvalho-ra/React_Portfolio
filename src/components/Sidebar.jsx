import SocialMedia from './SocialMedia'
import Informations from './Informations'
import Curriculo from '../document/Currículo.pdf'

import Avatar from '../img/perfil.jpg'

import '../styles/componentes/sidebar.sass'

const Sidebar = () => {
  return (
    <aside id="sidebar">
      <img src={Avatar} alt="Gustavo Carvalho" />
      <p className="title">Desenvolvedor Front-End</p>
      <SocialMedia />
      <Informations />
      <a href="../document/Currículo.pdf" target='_blanck' className="btn">
        Dowload currículo
      </a>
    </aside>
  )
}

export default Sidebar