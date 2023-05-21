import React from 'react'
import './card.css'
import car from '../../image/car.jpeg'
import air from '../../image/air.jpeg'
import bar from '../../image/bar.webp'
import puzzel from '../../image/puzzel.avif'

const Card = () => {
  const products = [
    {
     id:1,
     title:"Car",
     desc:"New release car",
     pic:car
    },
    {
      id:2,
      title:"Airplane",
      desc:"New release airplane",
      pic:air
     },
     {
      id:3,
      title:"Barbie",
      desc:"New release doll",
      pic:bar
     },
     {
      id:4,
      title:"Puzzel",
      desc:"New release puzzel",
      pic:puzzel
     }
]
  return (
    <div className='front'>
      {products.map(item => (
        <div className='card' key={item.id}>
          <img className='pic' src={item.pic} alt='toy' width='150px' height='100px'/>
          <p className='detail'>{item.title}</p>
          {/* <p className='detail'>{item.desc}</p> */}
        </div> 
         ))}
    </div>
    
  )
}

export default Card