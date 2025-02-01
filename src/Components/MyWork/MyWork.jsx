import React from 'react'
import './MyWork.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mywork_data from '../../assets/mywork_data'
import arrow_icon from '../../assets/arrow_icon.svg'

const MyWork = () => {
  return (
    <div id='work' className='mywork'>
      <div className="title-box">
        <h1>My Latest Work</h1>
        <img src={theme_pattern} alt="Theme Pattern" />
      </div>
      <div className="mywork-container">
        {mywork_data.map((work, index) => {
          return (
            <div key={index} className="work-item">
              <div className="image-wrapper">
                <a href={work.w_link} target="_blank" rel="noopener noreferrer">
                  <img src={work.w_img} alt={work.w_name} />
                  <div className="overlay">
                    <span>Explore Here</span>
                  </div>
                </a>
              </div>
              <div className="work-title">{work.w_name}</div>
            </div>
          )
        })}
      </div>
      <div className="mywork-showmore">
        <p><a href="https://github.com/selvaganapathi-developer">Show More</a></p>
        <img src={arrow_icon} alt="Arrow Icon" />
      </div>
    </div>
  )
}

export default MyWork
