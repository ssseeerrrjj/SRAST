import React from 'react'
import {Link} from 'react-router-dom'

const Header = () => {
  return (
    <div>
      <Link to="/">Домой</Link>
      <span> | </span>
      <Link to="/login">Вход</Link>
    </div>
  )
}

export default Header
