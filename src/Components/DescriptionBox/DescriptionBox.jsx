import React from 'react'
import './DescriptionBox.css'
const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
      <div className='descriptionbox-navigator'>
        <div className='descriptionbox-nav-box'>Description</div>
        <div className='descriptionbox-nav-box fade'>Reviews (122)</div>
      </div>
      <div className='descriptionbox-description'>
        <p>San pham tuyet voi ong mat troi, co xuat tu 100% tu thien nhien </p>
        <p>Thong so ky thuat thi khoi phai ban nua roi</p>
      </div>
    </div>
  )
}

export default DescriptionBox