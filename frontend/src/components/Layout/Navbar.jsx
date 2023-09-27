import React from 'react'
import { Link } from 'react-router-dom'
import { navItems } from '../../static/data'
import styles from '../../styles/styles'


const Navbar = ({active}) => {
  return (
    <div className={`block 800px:${styles.noramlFlex}`}>
         {
            navItems && navItems.map((i,index) => (
                <div className="flex max-400px:items-center justify-start ">
                  <Link to={i.url}
                    className={`${active === index + 1 ? "text-violet-600" : "text-black 800px:text-[#fff] "} pb-[15px] m-6 800px:pb-0 font-[500]  cursor-pointer `}
                    >
                  
                     <span className="border-b border-transparent absolute bottom-0 left-0 w-full"></span>
                        <div className='relative'>
                           <p className="hover:border-b  hover:border-white transition duration-200">
                            {i.title}
                            </p>
                            </div>
                    </Link>
                </div>
            ))
         }
    </div>
  )
}

export default Navbar