import React from 'react'
import './Footer.css'
import footer_logo from '../../assets/footer_logo.svg'
import user_icon from '../../assets/user_icon.svg'
//  import '@fortawesome/fontawesome-free/css/all.css'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-top">
        <div className="footer-top-left">
        <h1>
  Sel
  <span
    style={{
      background: 'linear-gradient(270deg, #87CEEB 10%, #0000FF 100% , #C084FC  102.06%)',
      backgroundClip: 'text',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent'
    }}
  >
    va.
  </span>
</h1>
            <p>I'm a full-stack developer with 1+ year of experience in web development and design, gained through company and freelance projects.</p>
        </div>
        <div className="footer-top-right">
            <div className="footer-email-input">
                <img src={user_icon} alt="" />
                <input type="email" placeholder='Enter your email' />
            </div>
            <div className="footer-subscribe">Subscribe</div>
        </div>
      </div>
      <hr />
      <div className="footer-bottom">
        <p className="footer-bottom-left">© 2024 Selva ganapathi. All rights reserved.</p>
        <div className="footer-bottom-right">
            <a href="#" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram"></i>
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin"></i>
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github"></i>
            </a>
        </div>
      </div>
    </div>
  )
}

export default Footer
