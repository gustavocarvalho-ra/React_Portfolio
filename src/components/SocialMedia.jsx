import {FaLinkedinIn, FaGithub, FaInstagram} from 'react-icons/fa'

import '../styles/componentes/socialmedia.sass'

const socialMedia = [
  { name: "", icon: <FaLinkedinIn/> }, 
  { name: "", icon: <FaGithub/> }, 
  { name: "", icon: <FaInstagram/> }, 
];

const SocialMedia = () =>{
  return <section id='social-media'>
    {socialMedia.map((media) => (
      <a href="#" className='social-btn' id='{media.name} key={media.name}'>
        {media.icon}
      </a>
    ))}
  </section>
}

export default SocialMedia