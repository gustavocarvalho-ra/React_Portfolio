import {FaLinkedinIn, FaGithub} from 'react-icons/fa'

import '../styles/componentes/socialmedia.sass'


const SocialMedia = () =>{
  return <section id='social-media'>
    <a href="https://github.com/gustavocarvalho-ra" target="_blank" className='social-btn'><FaGithub /></a>
    <a href="https://www.linkedin.com/in/gustavo-carvalho-7bb361205/" target="_blank" className='social-btn'><FaLinkedinIn /></a>
  </section>
}

export default SocialMedia



// Função em .map

// // const socialMedia = [
// //   { name: "1", icon: <FaLinkedinIn/> }, 
// //   { name: "2", icon: <FaGithub/> }, 
// // ];

//      {socialMedia.map((media) => (
//       <a href="https://github.com/gustavocarvalho-ra" className='social-btn' id='{media.Linkedin} key={media.0}'>
//       </a>,
//       <a href="" className='social-btn' id='{media.Git} key={media.1}'>
//         {media.icon}
//       </a>
//     ))}