import { AiFillPhone, AiOutlineMail, AiFillEnvironment } from 'react-icons/ai'

import '../styles/componentes/informations.sass'

const Informations = () => {
  return ( 
    <section id="information">
      <div className="info-card">
        <AiFillPhone id='phone-icon' />
        <div>
          <h3>Telefone</h3>
          <p>(11)98229-0502</p>
        </div>
      </div>
      <div className="info-card">
        <AiOutlineMail id='email-icon' />
        <div>
          <h3>E-mail</h3>
          <p>gustavoc1922@gmail.com</p>
        </div>
      </div>
      <div className="info-card">
        <AiFillEnvironment id='pin-icon' />
        <div>
          <h3>Localização</h3>
          <p>Itapecerica da Serra - SP</p>
        </div>
      </div>
    </section>
  );
};

export default Informations