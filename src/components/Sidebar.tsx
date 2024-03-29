import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import { SiShopware } from 'react-icons/si';
import { MdOutlineCancel } from 'react-icons/md';
import { links } from '../data/dummy';
import { useStateContext } from '../contexts/ContextProvider';

const Sidebar = () => {
  const { activeMenu, setActiveMenu, screenSize, currentColor } = useStateContext();
  const activeLink = 'flex item-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-white text-md m-2';
  const normalLink = 'flex item-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2';

  const handleCloseSideBar = () => {
    if (activeMenu && screenSize <= 900) {
      setActiveMenu(false)
    }
  }
  return (
    <div className='ml-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10'>
      {activeMenu && (<>
        <div  className='flex justify-between items-center gap-3 ml-3 mt-8 text-xl font-extrabold tracking-tight dark:text-white text-slate-900'>
          <Link to='/' className='flex items-center' onClick={() => handleCloseSideBar()} > <SiShopware/> <span className='ml-1'>DashBoard</span>  </Link>
          <TooltipComponent content='Menu' position='BottomCenter'>
            <button type="button" onClick={()=>(setActiveMenu((prevstate: boolean)=>!prevstate))}><div className='pl-1 pr-1 mr-1 text-xl' style={{ borderRadius:'50%'}}> <MdOutlineCancel/></div></button>
          </TooltipComponent>

        </div>
        <div className='mt-10'>
          {links.map((item) => (
            <div key={item.title}>
              <p className='text-gray-400 m-3 mt-4 uppercase'>
                {item.title}
              </p>
              
              {item.links.map((link) => (
                <NavLink to={`/${link.name}`}
                  onClick={() => handleCloseSideBar()}
                  key={link.name}

                  style={({ isActive }) => ({
                    backgroundColor: isActive ? currentColor : ''
                  }) }

                  className={({ isActive }) => isActive ? activeLink : normalLink}>
                  {link.icon}<span className='capitalize'> {link.name}</span>
                </NavLink>
              ))}
            </div>
          ))}
        </div>
      </>)}
    </div>
  )
}

export default Sidebar