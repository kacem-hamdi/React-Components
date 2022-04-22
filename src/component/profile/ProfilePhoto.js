import React from 'react'
import img from './images.jpg'
function ProfilePhoto() {
  const image = <picture>
    <source srcset={img} type="image/svg+xml" />
    <img src={img} className={'photo img-fluid img-thumbnail'} alt="..." />
  </picture>
  return (
    <div>
      {image}

    </div>



  )
}

export default ProfilePhoto