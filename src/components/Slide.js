import React from 'react'
import {Link} from 'react-router-dom';

const Slide = ({heading, subHeading,btn,to,children,src}) => {
  return (
    <div className="swiper-slide" style={{backgroundImage:`linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)), url(${src})`}}>
    <div className="content">
     {children || (
          <>
          <h2>{heading}</h2>
          <p>
           {subHeading}
          </p>
          <Link to={to && ''}>
          <button className='btn btn-primary'>{btn}</button>
          </Link>
          </>
     )}
    </div>
  </div>
  )
}

export default Slide