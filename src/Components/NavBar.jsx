import React from 'react'
import { Link } from 'react-router-dom';


const NavBar = () => {
  return (
    <div className="h-[5vh] font-bold flex justify-between sm:p-12 p-2 bg-primary text-white">

  {/* Logo / Name Section */}
  <div className="flex items-center space-x-2">
    <div>@</div>
    <div className="overflow-hidden max-h-6">
      <div className="hover:-translate-y-6 duration-300">
        <div>KASRA</div>
        <div>ZUNNAIYYER</div>
      </div>
    </div>
  </div>

  {/* Nav Links Section */}
  <div className="hidden md:block">
    <div className="flex space-x-12">
      {/* About Link */}
      <Link to="/about">
        <div className="group">
          <div>About</div>
          <div className="h-0.5 bg-white rounded-full scale-x-0 group-hover:scale-x-100 duration-300 origin-left"></div>
        </div>
      </Link>

      {/* Projects Link */}
      <Link to="/project">
        <div className="group">
          <div>Projects</div>
          <div className="h-0.5 bg-white rounded-full scale-x-0 group-hover:scale-x-100 duration-300 origin-left"></div>
        </div>
      </Link>

      {/* Contact Link */}
      <div className="group">
        <div>Contact</div>
        <div className="h-0.5 bg-white rounded-full scale-x-0 group-hover:scale-x-100 duration-300 origin-left"></div>
      </div>
    </div>
  </div>

</div>

  )
}

export default NavBar
