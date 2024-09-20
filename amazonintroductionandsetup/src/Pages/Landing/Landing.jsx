import React from 'react'
import LayOut from '../../LayOut/LayOut'
import Carousol from '../../Components/Carousel/CarouselEffect'
import Category from '../../Components/Category/Category'
import Products from '../../Components/Products/Product'

function Landing() {
  return (
    <LayOut>
        <Carousol />
        <Category />
        <Products />
      
    </LayOut>
  )
}

export default Landing
