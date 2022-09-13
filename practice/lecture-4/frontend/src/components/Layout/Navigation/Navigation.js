import React from 'react'
import {Link} from 'react-router-dom'
import styles from './Navigation.module.css'
import { useSelector } from 'react-redux'

const Navigation = () => {
  const {userInfo} = useSelector((state) => state.loginUser)
  return (
    <div className={styles.navContainer}>
        <Link to='/'>CompanyLogo</Link>
        <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/contact'>Contact</Link></li>
             
            {userInfo ? (
                <li>
                  <span>
                       Dashboard
                      <li><Link to='/dashboard'>Dashboard</Link></li>
                      <li><span>logout</span></li>
                  </span>
                </li>
                ): 
              <li><Link to='/login'>Login</Link></li>
            }
        </ul>

    </div>
  )
}

export default Navigation