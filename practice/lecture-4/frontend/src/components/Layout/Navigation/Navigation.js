import React from 'react'
import {Link} from 'react-router-dom'
import styles from './Navigation.module.css'

const Navigation = () => {
  return (
    <div className={styles.navContainer}>
        <Link to='/'>CompanyLogo</Link>
        <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/contact'>Contact</Link></li>
            <li><Link to='/login'>Login</Link></li>
        </ul>

    </div>
  )
}

export default Navigation