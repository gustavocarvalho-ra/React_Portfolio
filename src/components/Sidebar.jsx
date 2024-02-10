import SocialMedia from './SocialMedia'
import Informations from './Informations'
import Curriculo from '../document/Currículo.pdf'

import Avatar from '../img/perfil.jpg'

import '../styles/componentes/sidebar.sass'
import DowloadC1 from './dowload'

const Sidebar = () => {
  return (
    <aside id="sidebar">
      <img src={Avatar} alt="Gustavo Carvalho" />
      <p className="title">Desenvolvedor Front-End</p>
      <SocialMedia />
      <Informations />
      <a href="https://drive.google.com/file/d/1hymXw31THj6RQVpsUuy8Ld_QMnYldKwQ/view?usp=sharing" target='_blanck' className="btn">
        Currículo
      </a>
    </aside>
  )
}

export default Sidebar