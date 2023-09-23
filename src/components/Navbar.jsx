import React, { useState } from 'react';
import Logo from '../images/logo.avif';
import {HiMenuAlt3} from 'react-icons/hi';
import { AiOutlineClose} from 'react-icons/ai'
import Button from './Button';


const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className='w-full fixed z-10 bg-black opacity-90'>
      <nav className='flex w-full py-2 md:px-20 items-center justify-between '>
        <a href="/" className='flex items-center justify-center text-white text-lg cursor-pointer ml-10'>
          <img src={Logo} alt="" srcSet="" width={40} height={40} className=' rounded-2xl hidden md:block mr-5' /> Delious
        </a>

        <ul className='hidden md:flex text-white gap-6'>
          <li>
            <a href="/"> Home</a>
          </li>

          <li>
            <a href="/recipes">Explore</a>
          </li>

          <li>
            <a href="/favorites">Favorites</a>
          </li>


        </ul>
        <Button 
          title= 'sign in'
          contanerStyle = ' hidden md:block bg-transparent border border-white text-white hover:bg-white hover:text-slate-700 rounded-full min-w-[130px]'
        
        />
        <button className='block md:hidden text-white text-xl mr-8'
         onClick={()=> setOpen(prev => !prev)}>
          { open ? <AiOutlineClose/> : <HiMenuAlt3/>}

        </button>
      </nav>
      <div className={`${open ? 'flex' : 'hidden'}
       bg-black flex-col w-full px-4 pt-16 pb-10 text-white gap-6 text-[14px]
      `}>
        <a href="/">Home</a>
        <a href="/#recipes">Recipes</a>
        <a href="/#favorites">Favorites</a>

      </div>
    </header>

  )
}

export default Navbar