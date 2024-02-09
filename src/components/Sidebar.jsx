import Avatar from '../img/perfil.jpg'

import '../styles/componentes/sidebar.sass'

const Sidebar = () => {
  return (
    <aside id="sidebar">
      <img src={Avatar} alt="Gustavo Carvalho" />
      <p className="title">Desenvolvedor</p>
      <p>redes sociais</p>
      <p>informações de contato</p>
      <a href="" className="btn">
        Dowload currículo
      </a>
    </aside>
  )
}

export default Sidebar