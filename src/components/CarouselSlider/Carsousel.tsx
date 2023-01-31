import './index.css'
import 'tw-elements'

import React, { useEffect, useState } from 'react'
export default function CarouselSlider() {
  const [currentIndex, setCurrentIndex] = useState(0)
  let count = 0

  const handleOnNextClick = () => {
    count = (count + 1) % featuredImages.length
    setCurrentIndex(count)
  }

  const handleOnPrevClick = () => {
    const productsLength = featuredImages.length
    count = (currentIndex + productsLength - 1) % productsLength
    setCurrentIndex(count)
  }
  useEffect(() => {
    startSlider()
  })

  const startSlider = () => {
    setInterval(() => {
      handleOnNextClick()
    }, 3000)
  }

  const featuredImages = ['img-1', 'img-2', 'img-3']
  return (
    <>
      <div className="max-w-screen-xl m-auto">
        <div className="w-full relative select-none">
          <img src={featuredImages[0]} alt="" />

          <div className="absolute w-full top-1/2 transform -translate-y-1/2 flex justify-between items-start px-3">
            <button onClick={handleOnPrevClick}>Previous</button>
            <button onClick={handleOnNextClick}>Next</button>
          </div>
        </div>
      </div>
    </>
  )
}
