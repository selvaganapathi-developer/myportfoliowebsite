import React from 'react'
import './Hero.css'
import profile_img from '../../assets/portfolio.jpeg'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import resume from '../../assets/Myresume.pdf'

const Hero = () => {
  return (
    <div id='home' className='hero'>
      <img src={profile_img} alt="" className='profile-img' />
      <h1>I'm <span>Selva ganapathi,</span> Fullstack Web Developer📍.</h1>
      <p>I'm a full-stack developer  with 1+ year of experience in web development and design, gained through company and freelance projects. Skilled in researching, designing, implementing, and managing software, with a focus on testing and optimizing functionality. Experienced in creating visually appealing and functional websites. </p>
      <div className="hero-action">
        <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink></div>
        <div className="hero-resume"><a href={resume} download="selva_ganapathi_Resume.pdf">My resume</a></div>
      </div>
    </div>
  )
}

export default Hero
