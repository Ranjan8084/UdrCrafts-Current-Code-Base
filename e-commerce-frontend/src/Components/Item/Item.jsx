import React from 'react'
import './Item.css'
import { Link } from 'react-router-dom'

const Item = ({ id, name, image, new_price, old_price }) => {
  return (
    <div className='item'>
      <Link to={`/product/${id}`} style={{ textDecoration: 'none' }}>
        <img src={image} alt="products" />
        <p>{name}</p>
        <div className="item-prices">
          <div className="new-price">₹{new_price}</div>
          <div className="old-price">₹{old_price}</div>
        </div>
      </Link>
    </div>
  )
}

export default Item
