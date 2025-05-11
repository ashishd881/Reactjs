import React from 'react'
import {Container,Logo ,LogoutBtn} from '../index'
import { Link  } from 'react-router-dom'
import { useSelector } from 'react-redux'
// import {selectUser} from '../../store/authSlice'
import {useNavigate} from 'react-router-dom'

function Header() {
  const authStatus = useSelector((state)=> state.auth.status)
  const navigate =  useNavigate()
  //navigation bar ke array banake loop karenge array ke andar objects honge
  const navItems =[
    {
      name:'Home',
      //slug mtlb url kaha ja raha hai
      slug:"/",
      active: true
    },
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
    },
    {
        name: "Signup",
        slug: "/signup",
        active: !authStatus,
    },
    {
        name: "All Posts",
        slug: "/all-posts",
        active: authStatus,
    },
    {
        name: "Add Post",
        slug: "/add-post",
        active: authStatus,
    },
  ]
  return (
    <header className='py-3 shadow bg-gray-500'>
      <Container>
        <nav className='flex'>
          <div className=' mr-4'>
            <Link to='/'>
              <Logo width='70px'/>
            </Link>

          </div>
          {/* {div ke bahar unordered list banegi jispe hum loop karenge } */}
          <ul className='flex ml-auto'>
              {navItems.map((item)=> item.active ? (<li key={item.name}>
                                                      <button onClick={()=> navigate(item.slug)}
                                                        className='inline-block px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'>
                                                        {item.name}
                                                      </button>
                                                      {/* buttomn me click karte hi navigate ho jayega */}
                                                    </li>): null)
              }
              {/* react start kar ke authstatus batao agar authStatus true hoga toh uske aage ka dikhega anhi toh nahi diekhega*/}
              {authStatus && (
                <li> <LogoutBtn/>
                </li>
              )}
          </ul>

        </nav>
      </Container>
    </header>
  )
}

export default Header
