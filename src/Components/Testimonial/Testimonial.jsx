import React from 'react'
import './Testimonial.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mywork_data from '../../assets/mywork_data2'
import arrow_icon from '../../assets/arrow_icon.svg'

const MyWork = () => {
  return (
    <div id='work' className='mywork'>
      <div className="title-box">
        <h1>Testimonials</h1>
        <img src={theme_pattern} alt="Theme Pattern" />
      </div>
      <div className="mywork-container">
        {mywork_data.map((work, index) => {
          return (
            <div key={index} className="work-item">
              <div className="image-wrapper">
                <a href={work.w_link} target="_blank" rel="noopener noreferrer">
                  <img src={work.w_img} alt={work.w_name} />
              
                </a>
              </div>
            </div>
          )
        })}
      </div>

    </div>
  )
}

export default MyWork
