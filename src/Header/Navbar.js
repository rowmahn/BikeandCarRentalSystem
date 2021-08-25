import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { IconContext } from 'react-icons';

function Navbar() {



  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);
  var SidebarData = []
  if (localStorage.getItem('token') && (localStorage.getItem('customertype')==="Owner")) {
    

    SidebarData = [
      {
        title: 'Home',
        path: '/',
        icon: <AiIcons.AiFillHome />,
        cName: 'nav-text'
      },
      {
        title: 'Bike',
        path: '/vehicle/bike',
        icon: <FaIcons.FaBiking />,
        cName: 'nav-text'
      },
      {
        title: 'Car',
        path: '/vehicle/car',
        icon: <FaIcons.FaCar />,
        cName: 'nav-text'
      },
      {
        title: 'Add Vehicle',
        path: '/vehicle/insert',
        icon: <IoIcons.IoMdCart />,
        cName: 'nav-text'
      },
      {
        title: 'My Vehicle',
        path: '/myvehicle',
        icon: <IoIcons.IoIosCar />,
        cName: 'nav-text'
      },
      {
        title: 'My Profile',
        path: '/customer/myprofile',
        icon: <IoIcons.IoMdPerson />,
        cName: 'nav-text'
      }
    
      
    ];
  }

  else if (localStorage.getItem('token') && (localStorage.getItem('customertype')==="Renter")){

    SidebarData = [
      {
        title: 'Home',
        path: '/',
        icon: <AiIcons.AiFillHome />,
        cName: 'nav-text'
      },
      {
        title: 'Bike',
        path: '/vehicle/bike',
        icon: <FaIcons.FaBiking />,
        cName: 'nav-text'
      },
      {
        title: 'Car',
        path: '/vehicle/car',
        icon: <FaIcons.FaCar />,
        cName: 'nav-text'
      },
      {
        title: 'My Profile',
        path: '/customer/myprofile',
        icon: <IoIcons.IoMdPerson />,
        cName: 'nav-text'
      }
    
      
    ];
  }
  else{
    SidebarData=[
      {
        title: 'Home',
        path: '/',
        icon: <AiIcons.AiFillHome />,
        cName: 'nav-text'
      },
      {
        title: 'Bike',
        path: '/vehicle/bike',
        icon: <FaIcons.FaBiking />,
        cName: 'nav-text'
      },
      {
        title: 'Car',
        path: '/vehicle/car',
        icon: <FaIcons.FaCar />,
        cName: 'nav-text'
      }
    ]

  }

  

  return (
    
    <>
      <IconContext.Provider value={{ color: '#000' }}>
      
        <div className='navbar'>
        
          <Link to='#' className='menu-bars'>
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
          <a href="/" class="logo">Rental System</a>
        </div>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items' onClick={showSidebar}>
            <li className='navbar-toggle'>
              
              <Link to='#' className='menu-bars'>
                <AiIcons.AiOutlineClose />
                
              </Link>
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                  
                </li>
                
              );
            })}
            
          </ul>
          
          
        </nav>
        
        
      </IconContext.Provider>
    </>
    
  );
  
}

export default Navbar;
