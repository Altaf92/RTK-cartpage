import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Navbar = () => {

  const items = useSelector((state)=> state.cart );

  return (
    <div className='main_wrapper'>
      <span className='logo'>Redux Store</span>
      <div>
        <Link className='navLink' to="/">Home</Link>
        <Link className='navLink' to="/cart">Cart</Link>

        <span className='cartCount'>
            cart items: {items.length}
            {console.log(items)}
        </span>
      </div>
    </div>
  )
}

export default Navbar
